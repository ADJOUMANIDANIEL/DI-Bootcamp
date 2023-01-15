import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiRoot = `https://www.googleapis.com/books/v1/volumes`;
  private testData: Book[] = [
    new Book(
      "Sunshine",
      ["Alex Garland"],
      "http://books.google.com/books/content?id=uqhlAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    ),
    new Book(
      "Ex Machina",
      ["Alex Garland"],
      "http://books.google.com/books/content?id=yvFMBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    ),
    new Book(
      "Annihilation",
      ["Alex Garland"],
      "http://books.google.com/books/content?id=pjBHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    )
  ];

  constructor(private http: HttpClient) { }

  getBooks = () => this.testData;

  getBooksWithHttp = (author: string) => {
    let apiURL = `${this.apiRoot}?q=inauthor:"${author}"&langRestrict=en`;
    return this.http.get(this.apiRoot);
  }

}
