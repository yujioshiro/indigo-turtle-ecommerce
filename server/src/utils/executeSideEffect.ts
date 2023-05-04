export type Maybe<T> = T | null;

export const executeSideEffect = async (
  fn: (...args: any[]) => Promise<unknown>,
  ...args: any[]
): Promise<unknown> => {
  try {
    const value: unknown = await fn(...args);
    return value;
  } catch (_) {
    return null;
  }
};
