export class Book {

  constructor(private _id: String, private _author: String, private _title: String, private _editorial: String) {
  }

  get id(): String {
    return this._id;
  }

  set id(value: String) {
    this._id = value;
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
