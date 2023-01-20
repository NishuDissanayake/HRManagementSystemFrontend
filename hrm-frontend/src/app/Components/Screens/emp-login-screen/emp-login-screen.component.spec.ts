import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLoginScreenComponent } from './emp-login-screen.component';

describe('EmpLoginScreenComponent', () => {
  let component: EmpLoginScreenComponent;
  let fixture: ComponentFixture<EmpLoginScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpLoginScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpLoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
