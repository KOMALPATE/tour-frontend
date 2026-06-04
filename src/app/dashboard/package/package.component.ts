import { Component, viewChild, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PackageService } from './package.service';
import { AddPackageComponent } from './dialog/add-package/add-package.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-package',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './package.component.html',
  styleUrl: './package.component.css',
})
export class PackageComponent {
  packages: any[] = [];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private packageService: PackageService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.loadPackages();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = [
    'package_name',
    'destination',
    'price',
    'status',
  ];

  loadPackages() {
    this.packageService.getPackages().subscribe({
      next: (res: any) => {
        console.log(res);

        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;

        // IMPORTANT
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
        this.loadPackages();
      }
    });
  }
}
