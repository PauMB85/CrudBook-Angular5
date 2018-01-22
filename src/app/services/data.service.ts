import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {BadInputError} from '../commons/errors/bad-input-error';
import {NotFoundError} from '../commons/errors/not-found-error';
import {AppError} from '../commons/errors/app-error';

@Injectable()
export class DataService {

  constructor(private url: string, private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url,  {observe: 'response'})
      .map(response => response.body)
      .catch(this.handlerError);
  }

  get(id) {
    return this.http.get(this.url + '/' + id, {observe: 'response'})
      .map(response => response.body)
      .catch(this.handlerError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource), {observe: 'response'})
      .map(response => response.body)
      .catch(this.handlerError);
  }

  update(resource) {
    return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource), {observe: 'response'})
      .map(response => response.body)
      .catch(this.handlerError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id, {observe: 'response'})
      .map(response => response.body)
      .catch(this.handlerError);
  }

  private handlerError(err: Response) {
    console.log('El error producido es: ' + err);
    if (err.status === 400) {
      return Observable.throw(new BadInputError());
    }
    if (err.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(err));
  }

}
