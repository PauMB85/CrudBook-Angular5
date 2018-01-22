import { Injectable } from '@angular/core';
import {DataService} from '../data.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BookService extends DataService {

  constructor(http: HttpClient) {
    super('http://localhost:8090/services/rest/book/', http);
  }

}
