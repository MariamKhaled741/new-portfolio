import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../../services/portfolio'; // 👈 استيراد السيرفيس فقط
import { ProfileInfo } from '../../../../core/models/portfolio.models'; // 👈 استيراد الموديل من مكانه الصحيح

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit {
  heroData: ProfileInfo | null = null;
  private baseUrl = 'http://localhost:5000';

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe({
      next: (data) => {
        this.heroData = data;

        if (this.heroData && this.heroData.cvUrl) {
          if (!this.heroData.cvUrl.startsWith('http')) {
            this.heroData.cvUrl = `${this.baseUrl}${this.heroData.cvUrl}`;
          }
        }
      },
      error: (err) => console.error('Error loading profile:', err)
    });
  }
}