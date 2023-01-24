import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private controller = " "
  constructor(private http : HttpClient) { }

  public getEmpByEmail(email = "") : Observable<Employee[]>{
    return this.http.get<Employee[]>(`${environment.apiUrl}/${this.controller}/empbyemail?${email}`)
  }

  public getSoftwareByEmail(email = "") : Observable<Employee>{
    return this.http.get<Employee[]>(`${environment.apiUrl}/${this.controller}/empbyemail?${email}`)
  }

  public getHardwareByEmail(email = "") : Observable<Employee>{
    return this.http.get<Employee[]>(`${environment.apiUrl}/${this.controller}/empbyemail?${email}`)
  }

  public getProjectsByEmail(email = "") : Observable<Employee>{
    return this.http.get<Employee[]>(`${environment.apiUrl}/${this.controller}/empbyemail?${email}`)
}
}
