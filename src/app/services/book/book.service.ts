import { Injectable } from '@angular/core';
import {DataService} from '../data.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class BookService extends DataService {

  constructor(http: HttpClient) {
    super(environment.endpoints.cxf_serve, http);
  }

}
