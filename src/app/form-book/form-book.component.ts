import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.form = this.fb.group({
      book: this.fb.group({
        author: ['', [Validators.required]],
        title: ['', [Validators.required]],
        editorial: ['', [Validators.required]]
      })
    });
  }

  addBook() {
    console.log(this.form);
    console.log(this.book.value);
    console.log('author: ' + this.author.value);
  }


  get book() {
    return this.form.get('book');
  }

  get author() {
    return this.form.get('book.author');
  }

  get title() {
    return this.form.get('book.title');
  }

  get editorial() {
    return this.form.get('book.editorial');
  }
}
