import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable
 } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }
  getUsers(): Observable <{}> {
      return this.http.get(this.usersUrl)      
}
}
