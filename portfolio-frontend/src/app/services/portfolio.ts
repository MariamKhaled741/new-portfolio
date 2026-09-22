import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../admin/manage-projects/manage-projects';
import { Training } from '../admin/manage-trainings/manage-trainings';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // ⚠️ غيّري الـ Port (مثلاً 5000 أو 7000) حسب الرقم اللي مشروع الـ .NET شغال عليه عندك
private baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  // ================= PROJECTS API =================
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/Projects`);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.baseUrl}/Projects`, project);
  }

  updateProject(id: number | string, project: Project): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/Projects/${id}`, project);
  }

  deleteProject(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/Projects/${id}`);
  }

  // ================= TRAININGS API =================
  getTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(`${this.baseUrl}/Trainings`);
  }

  addTraining(training: Training): Observable<Training> {
    return this.http.post<Training>(`${this.baseUrl}/Trainings`, training);
  }

  updateTraining(id: number | string, training: Training): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/Trainings/${id}`, training);
  }

  deleteTraining(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/Trainings/${id}`);
  }
}