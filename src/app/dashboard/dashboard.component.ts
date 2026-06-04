import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  dashboardCounts: any = {};

  constructor(
    private router: Router,
    private dashboardService: DashboardService,
  ) {}

  ngOnInit() {
    this.loadCounts();
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/']);
    }
  }

  logout() {
    const confirmLogout = confirm('Are you sure you want to logout?');

    if (confirmLogout) {
      localStorage.removeItem('token');
      alert('Logout Successful');

      this.router.navigate(['/']);
    }
  }

  loadCounts() {
    this.dashboardService.getDashboardData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.dashboardCounts = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  tour() {
    this.router.navigate(['dashboard/tours']);
  }

  dashboard() {
    this.router.navigate(['dashboard']);
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
