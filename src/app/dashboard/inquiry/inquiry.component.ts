import { Component } from '@angular/core';
import { InquiryService } from './inquiry.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inquiry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inquiry.component.html',
  styleUrl: './inquiry.component.css',
})
export class InquiryComponent {
  inquiries: any[] = [];
  selectedInquiryId: number | null = null;
  timelineData: any[] = [];

  constructor(
    private inquiryService: InquiryService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.inquiryList();
  }

  inquiryList() {
    this.inquiryService.getInquiries().subscribe((data: any) => {
      this.inquiries = data;
      console.log(this.inquiries);
    });
  }

  viewTimeline(id: number) {
    this.selectedInquiryId = id;

    this.inquiryService.getTimeline(id).subscribe((res: any) => {
      this.timelineData = res;

      console.log(res);
    });
  }
}
