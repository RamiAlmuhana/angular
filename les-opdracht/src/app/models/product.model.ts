export class Product {

  private _name: String;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}
