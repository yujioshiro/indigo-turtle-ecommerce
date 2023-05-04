export const setPromiseTimeout = (min: number): Promise<void> => {
  return new Promise((_, rej) =>
    setTimeout(() => rej('Time is up'), 1000 * 60 * min)
  );
};
