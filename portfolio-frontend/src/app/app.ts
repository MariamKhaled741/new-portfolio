import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // 👈 لازم الـ RouterOutlet يكون موجود هنا
  template: `<router-outlet></router-outlet>` // أو templateUrl بيشاور على الفايل والفايل جواه <router-outlet></router-outlet>
})
export class AppComponent { }