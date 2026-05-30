import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PackageService } from './package.service';
import { AddPackageComponent } from './dialog/add-package/add-package.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-package',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './package.component.html',
  styleUrl: './package.component.css',
})
export class PackageComponent {
  packages: any[] = [];

  constructor(
    private packageService: PackageService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.loadPackages();
  }

  loadPackages() {
    this.packageService.getPackages().subscribe({
      next: (res: any) => {
        this.packages = res;
        console.log(this.packages);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddPackageComponent, {
      width: '800px',
      maxWidth: '90vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadPackages(); // Refresh table
      }
    });
  }
}
