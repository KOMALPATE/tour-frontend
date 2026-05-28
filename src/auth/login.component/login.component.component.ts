import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login.component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.component.html',
  styleUrl: './login.component.component.css',
})
export class LoginComponentComponent {
  email = '';
  password = '';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login() {
    const data = {
      email: this.email,
      password: this.password,
    };

    this.http.post('http://localhost:5000/api/admin/login', data).subscribe({
      next: (res: any) => {
        console.log(res);

        if (res.success) {
          alert('Login Successful');

          this.router.navigate(['/dashboard']);
        } else {
          alert('Invalid Email or Password');
        }
      },

      error: (err) => {
        alert('Server Error');

        console.log(err);
      },
    });
  }
}
