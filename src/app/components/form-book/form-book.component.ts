import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../services/book/book.service';
import {Book} from '../../model/book';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent implements OnInit {

  @Input('bookI') bookI: any = new Observable();
  @Output('addup') addup = new EventEmitter<Book>();
  formBook: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private bookService: BookService, private navigation: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  submitForm() {
    this.addup.emit(this.book.value);
  }
  createForm() {
    this.formBook = this.fb.group({
      book: this.fb.group({
        author: [this.bookI == null ? '' : this.bookI.author, [Validators.required]],
        title: [this.bookI == null ? '' : this.bookI.title, [Validators.required]],
        editorial: [this.bookI == null ? '' : this.bookI.editorial, [Validators.required]],
        id: [this.bookI == null ? '' : this.bookI.id],
      })
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
