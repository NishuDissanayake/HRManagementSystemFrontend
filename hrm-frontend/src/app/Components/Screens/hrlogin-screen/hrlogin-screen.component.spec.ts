import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRLoginScreenComponent } from './hrlogin-screen.component';

describe('HRLoginScreenComponent', () => {
  let component: HRLoginScreenComponent;
  let fixture: ComponentFixture<HRLoginScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRLoginScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HRLoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
