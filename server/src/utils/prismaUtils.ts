export const excludeFields = <Model, Key extends keyof Model>(
  model: Model,
  keys: Key[]
): Omit<Model, Key> => {
  for (let key of keys) {
    delete model[key];
  }
  return model;
};
