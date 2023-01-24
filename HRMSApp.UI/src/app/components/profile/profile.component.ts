import { Component } from '@angular/core';
import { Employee, Software } from 'src/app/models/employee';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private ProfileService : ProfileService){}

  employees: Employee[] = []
  software: Software[] = []
  email = ""

  ngOnInit() : void{
    this.ProfileService
    .getEmpByEmail(this.email)
    .subscribe((result: Employee[]) => (this.employees = result));
  }
}
