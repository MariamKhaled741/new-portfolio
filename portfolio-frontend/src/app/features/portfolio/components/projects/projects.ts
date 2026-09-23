import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../../services/portfolio'; // 👈 تأكدي من مسار الـ PortfolioService

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(
    private portfolioService: PortfolioService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.cdr.detectChanges(); // تحديث الواجهة فوراً عند استلام البيانات من قاعدة البيانات
      },
      error: (err) => console.error('Error fetching projects:', err)
    });
  }
}