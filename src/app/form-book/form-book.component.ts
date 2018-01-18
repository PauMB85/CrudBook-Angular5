import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      book: fb.group({
        author: ['', [Validators.required]],
        title: ['', [Validators.required]],
        editorial: ['', [Validators.required]]
      })
    });
  }

  ngOnInit() { }

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

  login() {
    console.log(this.form);
    console.log(this.book.value);
    console.log('author: ' + this.author.value);
  }


}
