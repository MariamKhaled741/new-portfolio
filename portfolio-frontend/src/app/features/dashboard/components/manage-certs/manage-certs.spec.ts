import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCerts } from './manage-certs';

describe('ManageCerts', () => {
  let component: ManageCerts;
  let fixture: ComponentFixture<ManageCerts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCerts],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageCerts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
