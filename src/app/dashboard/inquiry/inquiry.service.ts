import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InquiryService {
  apiUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getInquiries() {
    return this.http.get(`${this.apiUrl}/api/inquiries`);
  }

  getTimeline(id: number) {
    return this.http.get(`${this.apiUrl}/api/timeline/${id}`);
  }
}
