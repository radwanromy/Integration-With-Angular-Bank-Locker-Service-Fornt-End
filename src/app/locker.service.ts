import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locker } from './locker';
 
@Injectable({
  providedIn: 'root'
})
export class LockerService {

  private baseURL = "http://localhost:9090/api/posts/getRelease";
  constructor(private httpClient: HttpClient) { }

  getLocker_service(): Observable<Locker[]>{
    return this.httpClient.get<Locker[]>(`${this.baseURL}`);
  }
}
