import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomAdapter, CustomDateParserFormatter } from 'src/app/models/custom-date-format';
import { Leaves } from 'src/app/models/leaves';
import { LeaveService } from 'src/app/services/leave.service';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
})

export class LeaveComponent {
  title = 'HRMSApp.UI';
  leaves: Leaves[] = [];
  model?: string;
  
  email = "ishitha@gmail.com"

  form = new FormGroup({
    Email: new FormControl(''),
    ReqType: new FormControl(''),
    RequestDate: new FormControl(''),
    Month: new FormControl(''),
    Reason: new FormControl(''),
  });

  formData = {
    Status: '',
    ReqType: '',
    RequestDate: '',
    Month: '',
    Reason: '',
    Email: ''
  }

  constructor(private LeaveService: LeaveService, private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) { }

  ngOnInit(): void {
    this.LeaveService
      .getLeavesByEmail(this.email)
      .subscribe((result: Leaves[]) => (this.leaves = result));
  }

  Submit(formData: any){
    this.LeaveService.applyLeave(formData)
    console.log(formData)
  }
}
