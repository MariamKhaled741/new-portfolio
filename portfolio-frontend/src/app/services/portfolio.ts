import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// تجميع كل الـ Imports في سطر واحد لمنع تكرار المسارات واللخبطة
import { Project, Training, ProfileInfo } from '../core/models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
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

  // ================= PROFILE API =================
  getProfile(): Observable<ProfileInfo> {
    return this.http.get<ProfileInfo>(`${this.baseUrl}/Profile`);
  }

  updateProfile(profileData: ProfileInfo): Observable<ProfileInfo> {
    return this.http.put<ProfileInfo>(`${this.baseUrl}/Profile`, profileData);
  }
}