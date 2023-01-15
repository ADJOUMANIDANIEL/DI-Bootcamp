import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  previewMode = true;
  books: Book[] = [];
  bookSearch = "";

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  onClickImage(book: Book) {
    book.previewMode = !book.previewMode;
  }

  submitSearch() { 
    this.books = this.bookService.getBooks().filter((x: Book) => x.authors.includes(this.bookSearch) );
  }

}
