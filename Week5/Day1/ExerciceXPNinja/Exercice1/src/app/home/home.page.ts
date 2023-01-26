import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users:any;
  constructor(private service:ApiService) {}
  ngOnInit(){
    this.service.getUsers()
    .subscribe(response => {
      this.users = response;
    });   
     console.table(this.users);
     
  }
}
