import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../services/book/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  titleForm: String = 'Update a Book';
  book: Book = null ;
  constructor(private route: ActivatedRoute, private bookService: BookService, private navigate: Router) {
  }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap
    ])
      .switchMap(params => {
        const id = params[0].get('id');
        return this.bookService.get(id);
      })
      .subscribe(bookFromID => {
        this.book = bookFromID;
      });
  }

  onClickSubmit(bookF: Book) {
    this.bookService.update(bookF)
      .subscribe( () => {
        this.navigate.navigate(['/listBooks']);
      });
  }

}
