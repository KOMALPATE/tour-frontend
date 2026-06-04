import { Component, ViewChild } from '@angular/core';
import { InquiryService } from './inquiry.service';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-inquiry',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatTableModule],
  templateUrl: './inquiry.component.html',
  styleUrl: './inquiry.component.css',
})
export class InquiryComponent {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [
    'customer_name',
    'phone',
    'destination',
    'status',
    'action',
  ];
  detailColumns: string[] = ['detail'];
  selectedInquiryId: number | null = null;
  timelineData: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private inquiryService: InquiryService) {}

  ngOnInit() {
    this.inquiryList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  inquiryList() {
    this.inquiryService.getInquiries().subscribe((data: any) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  viewTimeline(id: number) {
    this.selectedInquiryId = this.selectedInquiryId === id ? null : id;

    if (!this.selectedInquiryId) {
      this.timelineData = [];
      return;
    }

    this.inquiryService.getTimeline(id).subscribe((res: any) => {
      this.timelineData = res;
    });
  }
}
