class UserTest {
  public id: string;

  public isActive: boolean;

  constructor() {
    this.id = 'novo id';
    this.isActive = false;
  }
}

const A = () => UserTest;

console.log('A ', A);
console.log('A() ', A);
const B = A();
console.log('A new', new (A())());
console.log('B new', new B());
