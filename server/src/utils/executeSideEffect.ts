export type Maybe<T> = T | null;

export const executeSideEffect = async <T>(
  fn: (...args: any[]) => T,
  ...args: any[]
): Promise<Maybe<T>> => {
  try {
    return fn(...args);
  } catch (_) {
    return null;
  }
};
