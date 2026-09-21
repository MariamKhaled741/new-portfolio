import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingService } from '../../../../core/services/training.service';
import { Training } from '../../../../core/models/portfolio.models';

@Component({
  selector: 'app-trainings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trainings.html',
  styleUrl: './trainings.scss'
})
export class TrainingsComponent implements OnInit {
  trainings: Training[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(
    private trainingService: TrainingService,
    private cdr: ChangeDetectorRef
  ) {}

ngOnInit(): void {
  this.trainingService.getTrainings().subscribe({
    next: (data) => {
      this.trainings = data;
      this.isLoading = false;
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Trainings Error:', err);
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  });
}
}