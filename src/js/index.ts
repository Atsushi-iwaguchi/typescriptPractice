import "../css/index.css";

// let greet = "hello world";
// console.log(greet);

// let isOpen: boolean = true;
// console.log(isOpen);

// let decimal: number = 6;
// let float: number = 1.11;
// console.log(decimal);
// console.log(float);

// let color: string = "blue";
// let greeting: string = `hello, ${color}`;
// console.log(color);
// console.log(greeting);

// let list: number[] = [1, 2, 4];
// let list2: Array<number> = [1, 2, 5];

// console.log(list);
// console.log(list2);

// let notSure: any = 4;
// console.log(notSure);

// let u: undefined = undefined;
// let n: null = null;
// console.log(undefined);
// console.log(null);

// type UserId = number;
// let userId: UserId = 202;
// console.log(userId);

// type型
// type Point = {
//   x: number;
//   y: number;
// };

// let coord: Point = { x: 100, y: 200 };
// console.log(coord);

// ユニオン型
type Response = "yes" | "no" | "maybe";
let answer: Response = "yes";
console.log(answer);

// オプショナル型
type User = {
  name: string;
  age?: number; //このプロパティは任意です
};

let user: User = {
  name: "Alice",
};
console.log(user);

//関数の定義の仕方
const add = (x: number, y: number): number => {
  return x + y;
};
console.log(add(add(2, 1), 2));

//typeを使用した引数の定義
type Point = {
  x: number;
  y: number;
};

const printCoord = (pt: Point): void => {
  //何もreturnしない場合はvoid型になる
  console.log(`座標のX値は ${pt.x}, Y値は ${pt.y}です`);
};

printCoord({ x: 100, y: 100 });

//オプショナルとデフォルトパラメータ
type UserInfo = {
  userId: number;
  userName?: string;
  userEmail?: string;
};

const createUser = (
  { userId, userName = "shibata", userEmail = "example@gamial.com" }: UserInfo,
  isAdmin: boolean = false,
) => {
  console.log(`User ID: ${userId}`);
  console.log(`User Name: ${userName}`);
  if (userEmail) {
    console.log(`User Email: ${userEmail}`);
  }
  console.log(`Is Admin: ${isAdmin}`);
};

createUser({ userId: 1, userName: "john" });
createUser({ userId: 1, userEmail: "jaj@exam.com" }, true);
