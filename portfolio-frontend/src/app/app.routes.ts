import { Routes } from '@angular/router';
import { authGuard } from '../../src/app/guards/auth-guard';

export const routes: Routes = [
  // 1️⃣ صفحة البورتفوليو العامة (الخاصة بالزوار)
  { 
    path: '', 
    loadComponent: () => import('../app/features/portfolio/pages/home/home').then(m => m.HomeComponent) // 👈 تأكدي من اسم ومسار مكون الـ Home عندك
  },

  // 2️⃣ صفحة تسجيل الدخول للأدمن
  { 
    path: 'admin/login', 
    loadComponent: () => import('./admin/admin-login/admin-login').then(m => m.AdminLogin) 
  },

  // 3️⃣ صفحة الداش بورد الرئيسية للأدمن (محمية بالـ AuthGuard)
  { 
    path: 'admin', 
    canActivate: [authGuard], 
    loadComponent: () => import('./admin/admin-dashboard/admin-dashboard').then(m => m.AdminDashboard) 
  },

  // 4️⃣ إعادة توجيه أي مسار خطأ للصفحة الرئيسية العامة
  { 
    path: '**', 
    redirectTo: '' 
  }
];