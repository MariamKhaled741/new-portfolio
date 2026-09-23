import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../../services/portfolio'; // 👈 تأكدي من المسار الصحيح للسيرفيس

@Component({
  selector: 'app-trainings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trainings.html',
  styleUrl: './trainings.scss'
})
export class TrainingsComponent implements OnInit {
  trainings: any[] = [];
  isLoading: boolean = true; // 👈 1. إعلان المتغير هنا لمنع الإيرور

  constructor(
    private portfolioService: PortfolioService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadTrainings();
  }

  loadTrainings(): void {
  this.isLoading = true;

  this.portfolioService.getTrainings().subscribe({
    next: (data) => {
      console.log('📢 Data received for trainings:', data); // 👈 طباعة البيانات القادمة من قاعدة البيانات
      this.trainings = data;
      this.isLoading = false;
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('❌ Error fetching trainings:', err);
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  });
}
}