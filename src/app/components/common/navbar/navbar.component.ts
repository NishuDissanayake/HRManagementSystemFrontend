import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  Permission = false
  isAdmin: any

  constructor(private router: Router, private LoginService: LoginService) {

    this.LoginService.userRole().subscribe((res) => {
      this.isAdmin = res
      console.log(this.isAdmin)
    })

    if(this.isAdmin = 1){
      this.Permission = true
    }
    else{
      this.Permission = false
    }

    console.log(this.Permission)
  }

  logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('role')
    this.router.navigate(["/login"])
  }
}
