const Right = <U>(x: U) => ({
  chain: <T>(f: (a: U) => T) => f(x),
  map: <T>(f: (a: U) => T) => Right(f(x)),
  fold: <T>(f: (a: U) => T, g: (a: U) => T) => g(x),
  toString: () => `Right(${x})`,
});

const Left = <U>(x: U) => ({
  chain: <T>(f: (a: U) => T) => Left(x),
  map: <T>(f: (a: U) => T) => Left(x),
  fold: <T>(f: (a: U) => T, g: (a: U) => T) => f(x),
  toString: () => `Left(${x})`,
});

export { Left, Right };
