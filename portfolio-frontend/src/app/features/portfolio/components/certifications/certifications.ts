import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss'
})
export class CertificationsComponent {
  showAll: boolean = false;

  allCertifications = [
    // 🌟 الشهادات المميزة
    { title: 'Getting Started with Deep Learning', issuer: 'NVIDIA', date: 'September 2025', isFeatured: true, icon: 'fa-solid fa-brain' },
    { title: 'Machine Learning Summer Training (120 hours)', issuer: 'National Telecommunication Institute (NTI)', date: 'September 2025', isFeatured: true, icon: 'fa-solid fa-robot' },
    { title: 'Full Stack Development Training', issuer: 'Arabian Academy', date: '2026', isFeatured: true, icon: 'fa-solid fa-layer-group' },
    { title: 'Data Modeling & Advanced DAX in Power BI', issuer: 'DataCamp / Professional Paths', date: '2025', isFeatured: true, icon: 'fa-solid fa-chart-bar' },
    { title: 'Case Study: Analyzing Customer Churn in Power BI', issuer: 'DataCamp', date: '2025', isFeatured: true, icon: 'fa-solid fa-pie-chart' },
    { title: 'Data Preparation & Fundamentals in Power BI', issuer: 'DataCamp', date: '2025', isFeatured: true, icon: 'fa-solid fa-database' },
    
    // 📊 باقي الشهادات
    { title: 'Data Science & Analytics', issuer: 'HP LIFE', date: 'July 2025', isFeatured: false, icon: 'fa-solid fa-chart-line' },
    { title: 'AI for Beginners', issuer: 'HP LIFE', date: 'July 2025', isFeatured: false, icon: 'fa-solid fa-wand-magic-sparkles' },
    { title: 'Data Manipulation with pandas', issuer: 'DataCamp', date: 'June 2025', isFeatured: false, icon: 'fa-solid fa-table' },
    { title: 'Exploratory Data Analysis in Python', issuer: 'DataCamp', date: '2025', isFeatured: false, icon: 'fa-solid fa-magnifying-glass-chart' },
    { title: 'Introduction to Statistics in Python', issuer: 'DataCamp', date: 'September 2025', isFeatured: false, icon: 'fa-solid fa-calculator' },
    { title: 'Intermediate Python', issuer: 'DataCamp', date: 'June 2025', isFeatured: false, icon: 'fa-brands fa-python' },
    { title: 'Introduction to Python', issuer: 'DataCamp', date: 'May 2025', isFeatured: false, icon: 'fa-brands fa-python' },
    { title: 'Python Data Fundamentals', issuer: 'DataCamp', date: '2025', isFeatured: false, icon: 'fa-solid fa-code' },
    { title: 'Python Programming Basics', issuer: 'Mahara-Tech / ITI', date: '2025', isFeatured: false, icon: 'fa-solid fa-graduation-cap' },
    { title: 'Introduction to Data Visualization with Seaborn', issuer: 'DataCamp', date: 'July 2025', isFeatured: false, icon: 'fa-solid fa-eye' },
    { title: 'Introduction to Power BI & Data Visualization', issuer: 'DataCamp', date: '2025', isFeatured: false, icon: 'fa-solid fa-chart-column' },
    { title: 'Power BI Fundamentals', issuer: 'DataCamp', date: '2025', isFeatured: false, icon: 'fa-solid fa-square-poll-vertical' },
    { title: 'Introduction to Excel & Data Preparation', issuer: 'DataCamp', date: 'July 2025', isFeatured: false, icon: 'fa-regular fa-file-excel' }
  ];

  get displayedCertifications() {
    return this.showAll ? this.allCertifications : this.allCertifications.slice(0, 6);
  }

  toggleShowMore() {
    this.showAll = !this.showAll;
  }
}