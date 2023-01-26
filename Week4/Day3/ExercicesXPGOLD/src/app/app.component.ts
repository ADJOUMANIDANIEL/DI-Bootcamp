import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { LoggerService } from './logger.service';
import { PrimeCalcService } from './prime-calc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'XPGOLD';
  movieList: any

  constructor(private _primeSvc : PrimeCalcService,
    private useExisting : LoggerService,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.get("http://swapi.dev/api/films/")
      .subscribe(res => this.movieList = res)
  }


    

}
