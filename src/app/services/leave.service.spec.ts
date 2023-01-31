import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController,} from '@angular/common/http/testing';
import { LeaveService } from './leave.service';

describe('LeaveService', () => {
  let service: LeaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule]
    });
    service = TestBed.inject(LeaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
