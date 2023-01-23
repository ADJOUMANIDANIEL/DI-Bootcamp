import { Component , OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Films } from '../models/films.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private api : ApiService) {}
  films: Films[] = []


  ngOnInit(): void {
    this.api.callApi().then((data : Films[])=>{
      this.films = data
    })
  }

}
