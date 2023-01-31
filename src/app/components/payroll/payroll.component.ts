import { Component, Input } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { Employee, EmployeeDetails } from 'src/app/models/employee';
import { Project } from 'src/app/models/project';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent {
  
  constructor(private EmployeeService: EmployeeService, private ProjectService: ProfileService) {}

  empDetails: EmployeeDetails[] = []
  projects: Project[] = []
  
  ngOnInit() {
    // this.ProjectService.getProjectsByEmail("ishitha@gmail.com").subscribe((result: Project[]) => (this.projects = result))
    this.EmployeeService.getEmp("disanayakenc@gmail.com").subscribe((result: EmployeeDetails[]) => (this.empDetails = result))
  }
}
