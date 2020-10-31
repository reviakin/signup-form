const Box = <T>(x: T) => ({
  map: <U>(f: (x: T) => U) => Box(f(x)),
  fold: <U>(f: (x: T) => U) => f(x),
  toString: () => `Box(${x})`,
});

export { Box };
