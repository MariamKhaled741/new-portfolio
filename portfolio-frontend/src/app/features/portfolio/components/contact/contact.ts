import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private cdr: ChangeDetectorRef
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.contactService.sendMessage(this.contactForm.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.successMessage = 'تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.';
        this.contactForm.reset();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Contact Form Error:', err);
        this.isSubmitting = false;
        this.errorMessage = 'حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة لاحقاً.';
        this.cdr.detectChanges();
      }
    });
  }
}