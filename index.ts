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

// 数値リテラル 数値を生み出すための式
// 2進数のリテラルは先頭に0bを、8進数のリテラルは先頭に0oを、そして16進数のリテラルは先頭に0xをつける
const binary = 0b1010; // 2進数リテラル
const octal = 0o755; // 8進数リテラル
const hexadecimal = 0xff; // 16進数リテラル

// 10 493 255 と表示される
console.log("数値リテラル", binary, octal, hexadecimal);

// 指数の数値リテラル
const big = 1e8; // 1の後ろの0が8つある言う意味
const small = 4e-5; // 6の前に0が5個

// 100000000 0.00004 と表示される
console.log("指数の数値リテラルsa", big, small);

// _入れて番号をわかりやすくもできる
const million = 1_000_000;

// 1000000 と表示される
console.log(million);

// BigIntリテラル
// const bignum: bigint = (123n + 456n) * 2n;
// console.log(bignum); // 1158n と表示される
