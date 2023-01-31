import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { Employee, Hardware, Software, Resource } from 'src/app/models/employee';
import { Project } from 'src/app/models/project';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  title = 'HRMSApp.UI';
  constructor(private ProfileService: ProfileService,
    private EmployeeService: EmployeeService,
    private ResourceService: ResourceService) { }

  employees: Employee[] = []
  softwares: Software[] = []
  hardwares: Hardware[] = []
  projects: Project[] = []
  resources: Resource[] = []

  email = "ishitha@gmail.com"

  ngOnInit() {
    const employee = this.ProfileService.getEmpByEmail(this.email).pipe(map((result: Employee[]) => (this.employees = result)));
    const project = this.ProfileService.getProjectsByEmail(this.email).pipe(map((result: Project[]) => (this.projects = result)));
    const software = this.ResourceService.getSoftwareByEmail(this.email).pipe(map((result: Software[]) => (this.softwares = result)));
    const hardware = this.ResourceService.getHardwareByEmail(this.email).pipe(map((result: Hardware[]) => (this.hardwares = result)));

    forkJoin([project, software, hardware]).subscribe(() => { });
  }
}
