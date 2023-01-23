import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Films } from "../models/films.model";
import { resolve } from "dns";


@Injectable()

export class ApiService {

  constructor(private client: HttpClient) { }

  films: Films[] = []
  urlBaseFilm: string = 'https://swapi.dev/api/films'

  callApi(): Promise<Films[]> {
    return new Promise((resolve, reject) => {
      this.client.get(this.urlBaseFilm).subscribe((data: any) => {
        let result: Films[] = data.results.map((item: any) =>
          new Films(item.title, item.episode_id, item.opening_crawl, item.director , item.producer , item.release_date)
        )
        resolve(result)
        
      },
        (err) => {
          reject(err)
        }
      )
    })
  }

}
