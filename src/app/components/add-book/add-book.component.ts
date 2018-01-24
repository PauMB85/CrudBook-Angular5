import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../services/book/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  titleForm: String = 'Add New Book';
  book: Book = null;
  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
  }

  onClickSubmit(bookF: Book) {
    this.bookService.create(bookF)
      .subscribe(() => {
        this.router.navigate(['/listBooks']);
      });
  }

}
