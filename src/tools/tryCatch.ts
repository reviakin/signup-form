import { Right, Left } from "./RightLeft";

const tryCatch = (f: (a?: any) => any) => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};

export { tryCatch };
