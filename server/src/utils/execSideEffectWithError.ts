export const execSideEffectWithError = async <T>(
  fn: (...args: any[]) => Promise<T>,
  ...args: any[]
): Promise<T | { error: any }> => {
  try {
    const value: T = await fn(...args);
    return value;
  } catch (error) {
    return { error };
  }
};
