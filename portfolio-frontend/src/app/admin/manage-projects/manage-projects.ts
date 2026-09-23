import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio';
import { Project } from '../../core/models/portfolio.models'; // 👈 استيراد الموديل الموحد


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

  constructor(private portfolioService: PortfolioService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  // 1️⃣ Fetch all projects from SQL Database via .NET API
loadProjects(): void {
    this.portfolioService.getProjects().subscribe({
      next: (data) => {
        console.log('Data received from DB:', data); // للتأكد في الكونسول
        this.projects = data;
        this.cdr.detectChanges(); // 👈 3. إجبار تحديث الـ DOM فور استلام البيانات
      },
      error: (err) => {
        console.error('Failed to load projects:', err);
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
    // 🛑 التأكد من إدخال الحقول المطلوبة بشكل صحيح
    if (!this.currentProject.title || !this.currentProject.description) {
      alert('الرجاء إدخال عنوان المشروع والوصف!');
      return;
    }

    if (this.isEditing && this.selectedId !== null) {
      // ✏️ تعديل مشروع موجود
      this.portfolioService.updateProject(this.selectedId, this.currentProject).subscribe({
        next: () => {
          alert('Project updated successfully! / تم تعديل المشروع بنجاح');
          this.loadProjects(); // إعادة تحميل القائمة
          this.resetForm();    // إغلاق الفورم فوراً
        },
        error: (err) => {
          console.error('Failed to update project:', err);
          alert('Error updating project in database.');
        }
      });
    } else {
      // ➕ إضافة مشروع جديد
      this.portfolioService.addProject(this.currentProject).subscribe({
        next: () => {
          alert('Project added successfully!');
          this.loadProjects(); // إعادة تحميل القائمة
          this.resetForm();    // إغلاق الفورم فوراً
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
          alert('Project deleted successfully! / تم مسح المشروع');
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