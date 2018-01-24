import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../services/book/book.service';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent implements OnInit {

  formBook: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private bookService: BookService, private navigation: Router) {
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
    this.bookService.create(this.book.value)
      .subscribe(() => {
        this.navigation.navigate(['/listBooks']);
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
