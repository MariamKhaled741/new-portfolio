import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationService } from '../../../../core/services/education.service';
import { Education } from '../../../../core/models/portfolio.models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent implements OnInit {
  educationList: Education[] = [];
  isLoading = true;

  constructor(
    private educationService: EducationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe({
      next: (data) => {
        console.log('Education Data Received:', data);
        this.educationList = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching education:', err);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
}