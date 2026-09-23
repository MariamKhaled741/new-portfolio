import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { HeroComponent } from './hero';
import { PortfolioService } from '../../../../services/portfolio';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  // عمل Mock للسيرفيس لمنع إرسال طلبات real HTTP أثناء الاختبار
  const portfolioServiceMock = {
    getProfile: () => of({
      fullName: 'Mariam Khaled',
      title: 'Full-Stack Developer',
      bio: 'Bio text',
      cvUrl: '/uploads/cv.pdf'
    })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent, HttpClientTestingModule],
      providers: [
        { provide: PortfolioService, useValue: portfolioServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});