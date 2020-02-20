export default class Calc {
  add(...args) {
    return args.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }
}