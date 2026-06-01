import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PackageService } from '../../package.service';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-package',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-package.component.html',
  styleUrl: './add-package.component.css',
})
export class AddPackageComponent {
  packageForm!: FormGroup;
  showForm = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private packageService: PackageService,
    private dialogRef: MatDialogRef<AddPackageComponent>,
  ) {}

  ngOnInit() {
    this.packageForm = this.fb.group({
      package_name: ['', Validators.required],
      destination: ['', Validators.required],
      price: ['', Validators.required],
      duration_days: ['', Validators.required],
      duration_nights: ['', Validators.required],
      hotel_name: ['', Validators.required],
      status: ['ACTIVE'],
    });
  }

  addPackage() {
    if (this.packageForm.valid) {
      this.loading = true;
      this.packageService.addPackage(this.packageForm.value).subscribe(
        (response) => {
          this.loading = false;
          console.log('Package added successfully', response);
          this.dialogRef.close(true);
          this.packageForm.reset();
        },
        (error) => {
          this.loading = false;
          console.error('Error adding package', error);
        },
      );
    }
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }
}
