import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../services/book/book.service';
import {Book} from '../../model/book';
import {AppError} from '../../commons/errors/app-error';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent implements OnInit {

  formBook: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private bookService: BookService) {
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.formBook = this.fb.group({
      book: this.fb.group({
        author: ['', [Validators.required]],
        title: ['', [Validators.required]],
        editorial: ['', [Validators.required]]
      })
    });
  }

  addBook() {
    console.log(this.book.value);
    const book: Book = this.book.value;
    this.bookService.create(book)
      .subscribe(newBook => {
        console.log('Create a new book ' + newBook);
      }, (error: AppError) => {
        console.log('Error when create the new book');
      });
  }


  get book() {
    return this.formBook.get('book');
  }

  get author() {
    return this.formBook.get('book.author');
  }

  get title() {
    return this.formBook.get('book.title');
  }

  get editorial() {
    return this.formBook.get('book.editorial');
  }
}
