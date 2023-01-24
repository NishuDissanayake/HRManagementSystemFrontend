import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Leaves } from 'src/app/models/leaves';
import { LeaveService } from 'src/app/services/leave.service';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent {
  title = 'HRMSApp.UI';
  leaves: Leaves[] = [];

  constructor(private LeaveService : LeaveService) { }

  ngOnInit() : void{
    this.LeaveService
    .getLeaves()
    .subscribe((result: Leaves[]) => (this.leaves = result));
  }
}
