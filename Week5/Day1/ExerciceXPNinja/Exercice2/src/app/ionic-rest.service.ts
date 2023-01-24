import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IonicRestService {

  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  fetchData(): Observable <{}> {
      return this.http.get(this.postsUrl)      
}
}
