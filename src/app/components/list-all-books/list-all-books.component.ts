import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-list-all-books',
  templateUrl: './list-all-books.component.html',
  styleUrls: ['./list-all-books.component.css']
})
export class ListAllBooksComponent implements OnInit {

  bookList: Array<Book> = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  deleteBook(id: number) {
    console.log('The book delete is: ' + id);
    this.bookService.delete(id)
      .subscribe(() => {
        this.getAllBooks();
      });
  }

  updateBook(id: number) {
    console.log('The book update is: ' + id);
  }

  private getAllBooks() {
    this.bookService.getAll()
      .subscribe(listBooks => {
        this.bookList = listBooks;
      });
  }

}
