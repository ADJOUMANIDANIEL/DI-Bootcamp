import { Component } from '@angular/core';
import { IonicRestService } from '../ionic-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
posts:any;
  constructor(private service:IonicRestService) {}
  ngOnInit(){
    this.service.fetchData()
    .subscribe(response => {
      this.posts = response;
    //console.table(this.posts);
    });   
     
  }
}
