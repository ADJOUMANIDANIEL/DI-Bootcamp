import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  ville:string = "";
  appid:string = "";

  makeRequest(){
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+ this.ville +"&APPID="+ this.appid
    this.Http.get(url).subscribe(resultat => {
      console.log(resultat);
    })
  }

  constructor(private Http: HttpClient){

  }
}
