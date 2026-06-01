import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PackageService } from '../../../package/package.service';
import { CommonModule } from '@angular/common';
import { TourService } from '../../tour.service';

@Component({
  selector: 'app-add-tour',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-tour.component.html',
  styleUrl: './add-tour.component.css',
})
export class AddTourComponent {
  tourForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private tourService: TourService,
    private dialogRef: MatDialogRef<AddTourComponent>,
  ) {}

  ngOnInit(): void {
    this.tourForm = this.fb.group({
      tour_name: [''],
      destination: [''],
      price: [''],
      duration: [''],
      start_date: [''],
      end_date: [''],
      description: [''],
      image: [''],
      status: ['Active'],
    });
  }

  addTour(): void {
    if (this.tourForm.invalid) {
      return;
    }

    this.loading = true;

    this.tourService.addTour(this.tourForm.value).subscribe({
      next: (res) => {
        console.log('Tour added successfully', res);

        this.loading = false;
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error('Error adding tour', err);
        this.loading = false;
      },
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
