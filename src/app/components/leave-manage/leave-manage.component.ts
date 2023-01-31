import { Component } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { Leaves } from 'src/app/models/leaves';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-leave-manage',
  templateUrl: './leave-manage.component.html',
  styleUrls: ['./leave-manage.component.css']
})
export class LeaveManageComponent {
  
  constructor(private LeaveService : LeaveService) {}
  leaves: Leaves[] = []
  leavesbyStatus: Leaves[] = []

  ngOnInit(){
    const allLeaves = this.LeaveService.getLeaves().pipe(map((result: Leaves[]) => (this.leaves = result)))
    const leavesbyStatus = this.LeaveService.getLeaveByStatus().pipe(map((result: Leaves[]) => (this.leavesbyStatus = result)))

    forkJoin([allLeaves, leavesbyStatus]).subscribe(() => {

    })
  }

  leaveApprove(id: string){
    this.LeaveService.approve(id)
    console.log(id)
  }

  leaveReject(id: string){
    this.LeaveService.reject(id)
    console.log(id)
  }
}
