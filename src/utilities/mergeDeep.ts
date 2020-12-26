/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 */
export const mergeDeep = <T = any, S = any>(target: T, source: S): T & S => {
  const isObject = (obj: any) => obj && typeof obj === 'object';

  if (!isObject(target) || !isObject(source)) {
    // @ts-ignore
    return source;
  }

  Object.keys(source).forEach(key => {
    // @ts-ignore
    const targetValue = target[key];
    // @ts-ignore
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      // @ts-ignore
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      // @ts-ignore
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      // @ts-ignore
      target[key] = sourceValue;
    }
  });

  // @ts-ignore
  return target;
};
