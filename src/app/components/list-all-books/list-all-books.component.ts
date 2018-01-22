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
    this.bookService.getAll()
      .subscribe(listBooks => {
        console.log('the book list is: ' + listBooks);
        this.bookList = listBooks;
        console.log('size list book: ' + this.bookList.length);
      });
  }

  deleteBook(id: String) {
    console.log('The book delete is: ' + id);
  }

  updateBook(id: String) {
    console.log('The book update is: ' + id);
  }

}
