export class Book {

  constructor(private _idBook: String, private _author: String, private _title: String, private _editorial: String) {
  }

  get idBook(): String {
    return this._idBook;
  }

  set idBook(value: String) {
    this._idBook = value;
  }
  get author(): String {
    return this._author;
  }

  set author(value: String) {
    this._author = value;
  }

  get title(): String {
    return this._title;
  }

  set title(value: String) {
    this._title = value;
  }

  get editorial(): String {
    return this._editorial;
  }

  set editorial(value: String) {
    this._editorial = value;
  }
}
