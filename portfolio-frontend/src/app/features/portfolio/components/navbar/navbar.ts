import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  activeSection: string = 'hero'; 
  isMenuOpen: boolean = false;   
  private isScrollingByClick: boolean = false; // flag لمنع التضارب أثناء الضغط

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // 1. دالة التنقل عند الضغط على اللينك
  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    this.isMenuOpen = false; 
    this.isScrollingByClick = true; // بنقول للبرنامج: احنا بنحرك الصفحة بكليكة دلوقتي، متسمعش لدالة السكرول

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // بنستنى ثانية لحد ما الـ smooth scroll يخلص ونرجع نشغل المراقبة التلقائية
      setTimeout(() => {
        this.isScrollingByClick = false;
      }, 800);
    } else {
      this.isScrollingByClick = false;
    }
  }

  // 2. دالة مراقبة السكرول التلقائي (شغالة بس لو المستخدم بيعمل سكرول بإيده)
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isScrollingByClick) return; // لو بنتحرك بكليكة، اخرج من الدالة ومتقلبش اللينكات

    // 👈 ضفنا trainings وباقي السكاشن هنا عشان الـ Listener يشوفهم
    const sections = ['hero', 'about', 'trainings', 'projects','certifications' ,'extracurricular', 'contact']; 
    
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const offset = scrollPosition + 200; // زودنا الإزاحة شوية عشان اللقط يكون أسرع وأدق

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (offset >= top && offset < top + height) {
          this.activeSection = sectionId;
          break; 
        }
      }
    }
  }
}