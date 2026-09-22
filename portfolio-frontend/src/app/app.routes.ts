import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  // 1️⃣ صفحة تسجيل الدخول
  { 
    path: 'admin/login', 
    loadComponent: () => import('./admin/admin-login/admin-login').then(m => m.AdminLogin) 
  },

  // 2️⃣ صفحة الداش بورد الرئيسية (محمية بالـ AuthGuard)
  { 
    path: 'admin', 
    canActivate: [authGuard], 
    loadComponent: () => import('./admin/admin-dashboard/admin-dashboard').then(m => m.AdminDashboard) 
  },

  // 3️⃣ إعادة توجيه الصفحة الرئيسية ورابط الخطأ لصفحة الأدمن
  { 
    path: '', 
    redirectTo: 'admin', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: 'admin' 
  }
];