import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { UsersService } from './users.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatSortModule, MatTableModule, MatPaginatorModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private usersService: UsersService) {}

  displayedColumns: string[] = [
    'customer_name',
    'phone',
    'email',
    'created_at',
  ];

  dataSource = new MatTableDataSource<any>();

  ngOnInit() {
    this.getUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getUsers() {
    this.usersService.getUsers().subscribe((res: any) => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
    });
  }
}
