import { Routes } from '@angular/router';
import { LoginComponentComponent } from '../auth/login.component/login.component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToursComponent } from './dashboard/tours/tours.component';
import { authGuard } from './guards/auth.guard';
import { PackageComponent } from './dashboard/package/package.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponentComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'tours',
    component: ToursComponent,
  },
  {
    path: 'packages',
    component: PackageComponent,
  },
];
