import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  // بنجيب السنة الحالية تلقائياً عشان يفضل محدث دايماً
  currentYear: number = new Date().getFullYear(); 
}