import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio';

export interface Project {
  id?: number | string;
  title: string;
  description: string;
  technologies?: string;
  imageUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

@Component({
  selector: 'app-manage-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-projects.html',
  styleUrl: './manage-projects.scss'
})
export class ManageProjects implements OnInit {
  showForm: boolean = false;
  isEditing: boolean = false;
  selectedId: number | string | null = null;

  projects: Project[] = [];

  currentProject: Project = {
    title: '',
    description: '',
    technologies: '',
    imageUrl: '',
    githubUrl: ''
  };

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  // 1️⃣ Fetch all projects from SQL Database via .NET API
  loadProjects(): void {
    this.portfolioService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (err) => {
        console.error('Failed to load projects from database:', err);
      }
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  // 2️⃣ Save (Add or Update) Project to Database
  saveProject(): void {
    if (!this.currentProject.title || !this.currentProject.description) {
      alert('Please fill in the required fields (Title and Description).');
      return;
    }

    if (this.isEditing && this.selectedId !== null) {
      // Update existing project
      this.portfolioService.updateProject(this.selectedId, this.currentProject).subscribe({
        next: () => {
          this.loadProjects(); // Reload list from DB
          this.resetForm();
        },
        error: (err) => {
          console.error('Failed to update project:', err);
          alert('Error updating project in database.');
        }
      });
    } else {
      // Add new project
      this.portfolioService.addProject(this.currentProject).subscribe({
        next: () => {
          this.loadProjects(); // Reload list from DB
          this.resetForm();
        },
        error: (err) => {
          console.error('Failed to add project:', err);
          alert('Error adding project to database.');
        }
      });
    }
  }

  // 3️⃣ Populate form for editing
  editProject(project: Project): void {
    this.currentProject = { ...project };
    this.selectedId = project.id ?? null;
    this.isEditing = true;
    this.showForm = true;
  }

  // 4️⃣ Delete Project from Database
  deleteProject(id: number | string | undefined): void {
    if (!id) return;

    if (confirm('Are you sure you want to delete this project?')) {
      this.portfolioService.deleteProject(id).subscribe({
        next: () => {
          this.loadProjects(); // Reload list from DB
        },
        error: (err) => {
          console.error('Failed to delete project:', err);
          alert('Error deleting project from database.');
        }
      });
    }
  }

  resetForm(): void {
    this.currentProject = {
      title: '',
      description: '',
      technologies: '',
      imageUrl: '',
      githubUrl: ''
    };
    this.isEditing = false;
    this.selectedId = null;
    this.showForm = false;
  }
}