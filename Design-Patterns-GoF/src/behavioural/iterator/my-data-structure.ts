import { MyDefaultIterador } from './my-default-iterator';
import { MyIteratorProtocol } from './my-iterator-protocol';

export class MyDataStructure {
  private _items: string[] = [];
  private iterator: MyIteratorProtocol<string> = new MyDefaultIterador(this);

  addItem(...items: string[]): void {
    items.forEach((item) => this.items.push(item));
  }

  get items(): string[] {
    return this._items;
  }

  size(): number {
    return this.items.length;
  }

  changeIterator(iterator: MyIteratorProtocol<string>): void {
    this.iterator = iterator;
  }

  [Symbol.iterator](): MyIteratorProtocol<string> {
    // this.iterator.reset(); // Sem isso ele zera não obtem os valores novamente
    return this.iterator;
  }

  resetIterator(): void {
    this.iterator.reset();
  }
}
