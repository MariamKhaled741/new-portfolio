import { Routes } from '@angular/router';

export const routes: Routes = [
  // 1. الموقع العام (البورتفوليو)
  {
    path: '',
    loadComponent: () => import('./features/portfolio/pages/home/home').then(m => m.HomeComponent)
  },

  // 2. لوحة التحكم (الداشبورد)
  {
    path: 'admin',
    // شيلنا .component من المسار وخلينا الكلاس المحمل اسمه AdminLayout حسب تسميتك
    loadComponent: () => import('./features/dashboard/pages/admin-layout/admin-layout').then(m => m.AdminLayout)
  },
  {
    path: 'admin/projects',
    loadComponent: () => import('./features/dashboard/components/manage-projects/manage-projects').then(m => m.ManageProjects)
  },
  {
    path: 'admin/certs',
    loadComponent: () => import('./features/dashboard/components/manage-certs/manage-certs').then(m => m.ManageCerts)
  },
  {
    path: 'admin/messages',
    loadComponent: () => import('./features/dashboard/components/view-messages/view-messages').then(m => m.ViewMessages)
  },

  // 3. مسار احتياطي لأي لينك غلط
  { path: '**', redirectTo: '' }
];