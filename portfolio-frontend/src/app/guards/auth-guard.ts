import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // التأكد هل المستخدم مسجل دخول أم لا (عن طريق التحقق من الـ localStorage)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    return true; // السماح بدخول صفحة الأدمن
  } else {
    // توجيه المستخدم لصفحة تسجيل الدخول ومنعه من الدخول
    router.navigate(['/admin/login']);
    return false;
  }
};