const calculadora = require("./script");

test("adds 1 + 2 to equal 3", () => {
  expect(calculadora.soma("1", "2")).toBe(3);
});

test("adds 3 - 2 to equal 1", () => {
  expect(calculadora.subtracao("3", "2")).toBe(1);
});

test("adds 10 * 2 to equal 20", () => {
  expect(calculadora.multiplicacao("10", "2")).toBe(20);
});

test("adds 30 / 3 to equal 3", () => {
  expect(calculadora.divisao("30", "3")).toBe(10);
});

test("adds 2 ** 3 to equal 8", () => {
  expect(calculadora.exponenciacao("2", "3")).toBe(8);
});
