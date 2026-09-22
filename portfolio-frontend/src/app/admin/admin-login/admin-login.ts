import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.scss'
})
export class AdminLogin{
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

onLogin() {
  if (this.email === 'admin@portfolio.com' && this.password === '123456') {
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/admin']); // 👈 التوجيه لـ /admin مباشرة
  } else {
    this.errorMessage = 'البريد الإلكتروني أو كلمة المرور غير صحيحة!';
  }
}
}