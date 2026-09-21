import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../../core/services/project.service';
import { Project } from '../../../../core/models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(
    private projectService: ProjectService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        console.log('Projects Data Received:', data);
        this.projects = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching projects:', err);
        this.errorMessage = 'تعذر تحميل المشاريع.';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
}