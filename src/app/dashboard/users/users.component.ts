import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatSortModule, MatTableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: any[] = [];

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

  getUsers() {
    this.usersService.getUsers().subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }
}
