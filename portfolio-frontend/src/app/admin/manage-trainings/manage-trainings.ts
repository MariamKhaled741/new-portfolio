import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio';
import { Training } from '../../core/models/portfolio.models'; // 👈 استيراد الموديل الموحد


@Component({
  selector: 'app-manage-trainings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-trainings.html',
  styleUrl: './manage-trainings.scss'
})
export class ManageTrainings implements OnInit {
  showForm: boolean = false;
  isEditing: boolean = false;
  selectedId: number | string | null = null;

  trainings: Training[] = [];

  currentTraining: Training = {
    title: '',
    provider: '',
    startDate: '',
    endDate: '',
    description: ''
  };

  constructor(private portfolioService: PortfolioService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadTrainings();
  }

  // 1️⃣ Fetch all trainings from SQL Database via .NET API
loadTrainings(): void {
  this.portfolioService.getTrainings().subscribe({
    next: (data) => {
      this.trainings = data;
      this.cdr.detectChanges(); // 👈 إجبار التحديث
    },
    error: (err) => {
      console.error('Failed to load trainings:', err);
    }
  });
}

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  // 2️⃣ Save (Add or Update) Training to Database
  saveTraining(): void {
    // 🛑 التحقق الصحيح من الحقول المطلوبة
    if (!this.currentTraining.title || !this.currentTraining.provider) {
      alert('الرجاء إدخال اسم التدريب والجهة المقدمة!');
      return;
    }

    if (this.isEditing && this.selectedId !== null) {
      // ✏️ تعديل تدريب موجود
      this.portfolioService.updateTraining(this.selectedId, this.currentTraining).subscribe({
        next: () => {
          alert('Training updated successfully! / تم تعديل التدريب بنجاح');
          this.loadTrainings(); // إعادة تحميل القائمة من الـ DB
          this.resetForm();     // إغلاق الفورم فوراً
        },
        error: (err) => {
          console.error('Failed to update training:', err);
          alert('Error updating training in database.');
        }
      });
    } else {
      // ➕ إضافة تدريب جديد
      this.portfolioService.addTraining(this.currentTraining).subscribe({
        next: () => {
          alert('Training added successfully! / تم إضافة التدريب بنجاح');
          this.loadTrainings(); // إعادة تحميل القائمة من الـ DB
          this.resetForm();     // إغلاق الفورم فوراً
        },
        error: (err) => {
          console.error('Failed to add training:', err);
          alert('Error adding training to database.');
        }
      });
    }
  }

  // 3️⃣ Populate form for editing
  editTraining(item: Training): void {
    this.currentTraining = { ...item };
    this.selectedId = item.id ?? null;
    this.isEditing = true;
    this.showForm = true;
  }

  // 4️⃣ Delete Training from Database
  deleteTraining(id: number | string | undefined): void {
    if (!id) return;

    if (confirm('Are you sure you want to delete this training?')) {
      this.portfolioService.deleteTraining(id).subscribe({
        next: () => {
          alert('Training deleted successfully! / تم مسح التدريب بنجاح');
          this.loadTrainings(); // إعادة تحميل القائمة
        },
        error: (err) => {
          console.error('Failed to delete training:', err);
          alert('Error deleting training from database.');
        }
      });
    }
  }

  resetForm(): void {
    this.currentTraining = {
      title: '',
      provider: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    this.isEditing = false;
    this.selectedId = null;
    this.showForm = false;
  }
}