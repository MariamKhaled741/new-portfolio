import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityService } from '../../../../core/services/activity.service';
import { Activity } from '../../../../core/models/portfolio.models';

@Component({
  selector: 'app-extracurricular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extracurricular.html',
  styleUrl: './extracurricular.scss'
})
export class ExtracurricularComponent implements OnInit {
  activities: Activity[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(
    private activityService: ActivityService,
    private cdr: ChangeDetectorRef
  ) {}

 ngOnInit(): void {
  this.activityService.getActivities().subscribe({
    next: (data) => {
      this.activities = data;
      this.isLoading = false;
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Activities Error:', err);
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  });
}
}