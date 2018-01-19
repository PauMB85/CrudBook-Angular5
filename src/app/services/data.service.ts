import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url, {observe: 'response'});
  }

  get(id) {
    return this.http.get(this.url + '/' + id, {observe: 'response'});
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource), {observe: 'response'});
  }

  update(resource) {
    return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource), {observe: 'response'});
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id, {observe: 'response'});
  }

}
