import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AddTourComponent } from './component/add-tour/add-tour.component';
import { TourService } from './tour.service';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule, MatSortModule],

  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css',
})
export class ToursComponent {
  showForm = false;
  loadTours: any;
  tours: any[] = [];

  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private tourService: TourService,
  ) {}

  ngOnInit(): void {
    this.getTours();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = [
    'tour_name',
    'destination',
    'price',
    'duration',
    'start_date',
    'end_date',
    'status',
  ];

  getTours() {
    this.tourService.getTours().subscribe({
      next: (res: any) => {
        console.log('API Response:', res);

        this.dataSource.data = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddTourComponent, {
      width: '800px',
      maxWidth: '90vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getTours();
      }
    });
  }
}
