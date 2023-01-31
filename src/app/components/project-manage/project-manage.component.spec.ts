import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController,} from '@angular/common/http/testing';
import { ProjectManageComponent } from './project-manage.component';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';

describe('ProjectManageComponent', () => {
  let component: ProjectManageComponent;
  let fixture: ComponentFixture<ProjectManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManageComponent, NavbarComponent ],
      imports: [ HttpClientModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule, NgbModule, MatCardModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
