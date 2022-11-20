import { User } from '../interfaces/User';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;

  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

// Comprovando que são a mesma classe
// const db1 = MyDatabaseClassic.getInstance();
// const db2 = MyDatabaseClassic.getInstance();

// console.log(db1 === db2);
