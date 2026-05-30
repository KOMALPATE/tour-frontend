import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PackageService } from '../../package.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-package',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-package.component.html',
  styleUrl: './add-package.component.css',
})
export class AddPackageComponent {
  packageForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private packageService: PackageService,
  ) {}

  ngOnInit() {
    this.packageForm = this.fb.group({
      package_name: ['', Validators.required],
      destination: ['', Validators.required],
      price: ['', Validators.required],
      duration: ['', Validators.required],
      hotel_name: ['', Validators.required],
      status: ['Active'],
    });
  }

  addPackage() {
    if (this.packageForm.valid) {
      this.packageService.addPackage(this.packageForm.value).subscribe(
        (response) => {
          console.log('Package added successfully', response);
          this.packageForm.reset();
        },
        (error) => {
          console.error('Error adding package', error);
        },
      );
    }
  }
}
