import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  apiUrl = 'http://localhost:4000/api/tours';

  constructor(private http: HttpClient) {}

  addTour(data: any) {
    return this.http.post(`${this.apiUrl}/add`, data);
  }
  getTours() {
    return this.http.get(`${this.apiUrl}`);
  }
}
