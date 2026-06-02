import { Routes } from '@angular/router';
import { LoginComponentComponent } from '../auth/login.component/login.component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToursComponent } from './dashboard/tours/tours.component';
import { authGuard } from './guards/auth.guard';
import { PackageComponent } from './dashboard/package/package.component';
import { TimelineComponent } from './dashboard/timeline/timeline.component';
import { InquiryComponent } from './dashboard/inquiry/inquiry.component';
import { UsersComponent } from './dashboard/users/users.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponentComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],

    children: [
      {
        path: 'timeline/:id',
        component: TimelineComponent,
      },
      {
        path: 'inquiries',
        component: InquiryComponent,
      },
      {
        path: 'tours',
        component: ToursComponent,
      },
      {
        path: 'packages',
        component: PackageComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
    ],
  },
];
