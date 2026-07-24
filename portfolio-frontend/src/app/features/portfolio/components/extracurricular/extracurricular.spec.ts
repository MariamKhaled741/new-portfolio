import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Extracurricular } from './extracurricular';

describe('Extracurricular', () => {
  let component: Extracurricular;
  let fixture: ComponentFixture<Extracurricular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Extracurricular],
    }).compileComponents();

    fixture = TestBed.createComponent(Extracurricular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
