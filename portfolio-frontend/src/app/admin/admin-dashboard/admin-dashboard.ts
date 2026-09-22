import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ManageProjects } from '../manage-projects/manage-projects';
import { ManageTrainings } from '../manage-trainings/manage-trainings';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ManageProjects, ManageTrainings],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss'
})
export class AdminDashboard {
  activeTab: 'projects' | 'trainings' = 'projects';

  constructor(private router: Router) {}

  onLogout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/admin/login']);
  }
}