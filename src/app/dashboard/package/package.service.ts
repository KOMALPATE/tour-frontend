import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  apiUrl = 'http://localhost:4000/api/packages';

  constructor(private http: HttpClient) {}

  addPackage(data: any) {
    return this.http.post(`${this.apiUrl}/add`, data);
  }
  getPackages() {
    return this.http.get(`${this.apiUrl}`);
  }
}
