import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:4000';

  getUsers() {
    return this.http.get(`${this.apiUrl}/api/users`);
  }
}
