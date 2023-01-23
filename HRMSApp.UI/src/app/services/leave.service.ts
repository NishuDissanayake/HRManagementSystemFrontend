import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { Leaves } from '../models/leaves';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private controller = "lwfh"
  constructor(private http: HttpClient){ };

  public getLeaves() : Observable<Leaves[]> {
    return this.http.get<Leaves[]>(`${environment.apiUrl}/${this.controller}/all`)
  }
}
