import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  errorMessage: string = '';

  constructor(
    private certService: CertificationService,
    private cdr: ChangeDetectorRef
  ) {}

 ngOnInit(): void {
  this.certService.getCertifications().subscribe({
    next: (data) => {
      this.certifications = data;
      this.isLoading = false;
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Certifications Error:', err);
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  });
}
}