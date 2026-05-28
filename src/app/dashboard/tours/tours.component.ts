import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule, FormsModule],

  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css',
})
export class ToursComponent {
  showForm = false;

  tours: any[] = [];

  tour_name = '';
  destination = '';
  price = '';
  duration = '';
  status = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTours();
  }

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  addTour() {
    const data = {
      tour_name: this.tour_name,
      destination: this.destination,
      price: this.price,
      duration: this.duration,
      status: this.status,
    };

    this.http.post('http://localhost:5000/api/tours/add', data).subscribe({
      next: (res: any) => {
        alert(res.message);

        this.getTours();

        this.closeForm();
      },
    });
  }

  getTours() {
    this.http.get<any>('http://localhost:5000/api/tours').subscribe({
      next: (res) => {
        this.tours = res;
      },
    });
  }
}
