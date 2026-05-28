import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private router: Router) {}
  logout() {
    const confirmLogout = confirm('Are you sure you want to logout?');

    if (confirmLogout) {
      alert('Logout Successful');

      this.router.navigate(['/']);
    }
  }
  tour() {
    this.router.navigate(['/tours']);
  }
}
