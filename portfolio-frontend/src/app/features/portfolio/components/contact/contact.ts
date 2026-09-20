import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../../../core/services/contact.service';
import { ContactMessage } from '../../../../core/models/portfolio.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  messageData: ContactMessage = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;

  constructor(private contactService: ContactService) {}

  onSubmit(): void {
    if (!this.messageData.name || !this.messageData.email || !this.messageData.message) {
      alert('يرجى ملء جميع الحقول المطلوب');
      return;
    }

    this.isSubmitting = true;
    this.contactService.sendMessage(this.messageData).subscribe({
      next: () => {
        alert('شكراً لك! تم إرسال رسالتك بنجاح.');
        this.messageData = { name: '', email: '', subject: '', message: '' };
        this.isSubmitting = false;
      },
      error: (err) => {
        console.error('Error sending message:', err);
        alert('حدث خطأ أثناء الإرسال. حاول مرة أخرى.');
        this.isSubmitting = false;
      }
    });
  }
}