import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/']);
    }
  }

  logout() {
    const confirmLogout = confirm('Are you sure you want to logout?');

    if (confirmLogout) {
      alert('Logout Successful');

      this.router.navigate(['/']);
    }
  }

  tour() {
    this.router.navigate(['dashboard/tours']);
  }

  package() {
    this.router.navigate(['dashboard/packages']);
  }
  users() {
    this.router.navigate(['dashboard/users']);
  }
  inquiries() {
    this.router.navigate(['dashboard/inquiries']);
  }
}
