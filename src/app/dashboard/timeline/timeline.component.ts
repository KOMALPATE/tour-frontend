import { Component } from '@angular/core';
import { InquiryService } from '../inquiry/inquiry.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {
  timelineData: any[] = [];

  constructor(
    private inquiryService: InquiryService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    console.log('ID:', id);

    if (id) {
      this.getTimeLine(Number(id));
    }
  }

  getTimeLine(id: number) {
    this.inquiryService.getTimeline(id).subscribe({
      next: (data: any) => {
        console.log(data);

        this.timelineData = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
