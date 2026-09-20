import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificationService } from '../../../../core/services/certification.service';
import { Certification } from '../../../../core/models/portfolio.models';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss'
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [];
  isLoading: boolean = true;

  constructor(private certService: CertificationService) {}

  ngOnInit(): void {
    this.certService.getCertifications().subscribe({
      next: (data) => {
        this.certifications = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching certifications:', err);
        this.isLoading = false;
      }
    });
  }
}