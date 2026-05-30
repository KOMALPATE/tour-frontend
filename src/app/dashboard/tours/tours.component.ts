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
  loadTours: any;

  tours: any[] = [];
  tour_name = '';
  destination = '';
  price = '';
  duration = '';

  start_date = '';
  end_date = '';
  description = '';
  image = '';

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
      start_date: this.start_date,
      end_date: this.end_date,
      description: this.description,
      image: this.image,
      status: this.status,
    };
    this.http.post('http://localhost:4000/api/tours/add', data).subscribe({
      next: (res: any) => {
        alert(res.message);

        this.getTours();

        this.closeForm();
      },
    });
  }

  selectedId: number = 0;

  editTour(tour: any) {
    this.selectedId = tour.id;

    this.tour_name = tour.tour_name;
    this.destination = tour.destination;
    this.price = tour.price;
    this.duration = tour.duration;
    this.start_date = tour.start_date;
    this.end_date = tour.end_date;
    this.status = tour.status;

    this.showForm = true;
  }

  updateTour() {
    const data = {
      tour_name: this.tour_name,
      destination: this.destination,
      price: this.price,
      duration: this.duration,
      start_date: this.start_date,
      end_date: this.end_date,
      status: this.status,
    };

    this.http
      .put(`http://localhost:4000/api/tours/update/${this.selectedId}`, data)
      .subscribe(() => {
        this.loadTours();
        this.closeForm();
      });
  }

  deleteTour(id: number) {
    if (confirm('Delete this tour?')) {
      this.http
        .delete(`http://localhost:4000/api/tours/delete/${id}`)
        .subscribe(() => {
          this.getTours();
        });
    }
  }

  getTours() {
    this.http.get<any>('http://localhost:4000/api/tours').subscribe({
      next: (res) => {
        this.tours = res;
      },
    });
  }
}
