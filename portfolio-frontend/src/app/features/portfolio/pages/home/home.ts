import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar';   // 👈 1. هاتي مسار الناف بار عندك
import { HeroComponent } from '../../components/hero/hero';             // مسار الهيرو
import { AboutComponent } from '../../components/about/about';     // مسار الأباوت
import { TrainingsComponent } from '../../components/trainings/trainings'; // 1. 👈 تأكدي من عمل الـ Import هنا
import { ProjectsComponent } from '../../components/projects/projects'; // 1. 👈 تأكدي من عمل الـ Import هنا
import { CertificationsComponent } from '../../components/certifications/certifications'; // 1. 👈 تأكدي من عمل الـ Import هنا
import { ExtracurricularComponent } from '../../components/extracurricular/extracurricular'; // 1. 👈 تأكدي من عمل الـ Import هنا
import { ContactComponent } from '../../components/contact/contact'; // 1. 👈 تأكدي من عمل الـ Import هنا
import { FooterComponent } from '../../components/footer/footer'; // تأكدي من المسار الفعلي عندك


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent, // 👈 2. ضايفيه هنا عشان الهوم يعترف بيه
    HeroComponent, 
    AboutComponent,
    TrainingsComponent, // 2. 👈 لازم تضيفيها هنا جوه مصفوفة الـ imports
    ProjectsComponent, // 2. 👈 لازم تضيفيها هنا جوه مصفوفة الـ imports
    CertificationsComponent, // 2. 👈 لازم تضيفيها هنا جوه مصفوفة الـ imports
    ExtracurricularComponent, // 2. 👈 لازم تضيفيها هنا جوه مصفوفة الـ imports
    ContactComponent, // 2. 👈 لازم تضيفيها هنا جوه مصفوفة الـ imports
    FooterComponent // 2. 👈 لازم تضيفيها هنا جوه مصفوفة الـ imports

  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}