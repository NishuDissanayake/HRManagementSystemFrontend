import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController,} from '@angular/common/http/testing';
import { ResourceManageComponent } from './resource-manage.component';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ResourceManageComponent', () => {
  let component: ResourceManageComponent;
  let fixture: ComponentFixture<ResourceManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceManageComponent, NavbarComponent ],
      imports: [ HttpClientModule, HttpClientTestingModule, MatCardModule, FormsModule, ReactiveFormsModule, NgbModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
