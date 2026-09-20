import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMessage } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://localhost:7001/api/ContactMessages';

  constructor(private http: HttpClient) {}

  getMessages(): Observable<ContactMessage[]> {
    return this.http.get<ContactMessage[]>(this.apiUrl);
  }

  sendMessage(message: ContactMessage): Observable<ContactMessage> {
    return this.http.post<ContactMessage>(this.apiUrl, message);
  }

  deleteMessage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}