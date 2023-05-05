export const execSideEffect = async <T>(
  fn: (...args: any[]) => Promise<T>,
  ...args: any[]
): Promise<T | null> => {
  try {
    const value: T = await fn(...args);
    return value;
  } catch (_) {
    return null;
  }
};
