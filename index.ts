function repeatHello(count: number): string {
  console.log("count");
  return "hello".repeat(count);
}

repeatHello(1);

// クラスで書く場合
class Human {
  greet() {
    console.log("Hello");
  }
}

const human = new Human();

// あまり推奨されていないがこのように書くこともできる
const greeting = "Hello, ",
  target = "world!",
  text = greeting + target;
console.log(text);

// 日本語で変数宣言することもできる
const あいう = 123;
const 技術評論社 = あいう + 876;
console.log(技術評論社);

// 計算
const width1 = 5;
const width2 = 3;
const height: number = 3;
const area = ((width1 + width2) * height) / 2;
