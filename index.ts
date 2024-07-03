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

human.greet();
