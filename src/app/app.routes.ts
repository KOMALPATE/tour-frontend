import { Routes } from '@angular/router';
import { LoginComponentComponent } from '../auth/login.component/login.component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToursComponent } from './dashboard/tours/tours.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponentComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'tours',
    component: ToursComponent,
  },
];
