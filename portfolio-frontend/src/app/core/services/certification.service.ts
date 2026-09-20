import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certification } from '../models/portfolio.models';
import { environment } from '../../../environments/environment'; // 👈 استيراد ملف البيئة

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  private apiUrl = `${environment.apiUrl}/Certifications`; // 👈 استخدام الرابط الديناميكي

  constructor(private http: HttpClient) {}

  getCertifications(): Observable<Certification[]> {
    return this.http.get<Certification[]>(this.apiUrl);
  }

  createCertification(cert: Certification): Observable<Certification> {
    return this.http.post<Certification>(this.apiUrl, cert);
  }

  deleteCertification(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}