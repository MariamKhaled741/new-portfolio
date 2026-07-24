import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html', // أو './contact.component.html' حسب تسمية ملفك
  styleUrl: './contact.scss'       // أو './contact.component.scss' حسب تسمية ملفك
})
export class ContactComponent {

  // 💡 تأكدي إن الدالة مكتوبة هنا بالظبط جوه أقواس الكلاس
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Thank you for reaching out! Your message was simulated successfully.');
  }

}