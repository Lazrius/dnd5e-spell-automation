/**
 * @template T obj
 * @param {T} obj
 * @param {Methods<T>} method
 * @param {Properties<T>[]} dependentProperties
 */
declare function cache<T>(obj: T, method: keyof { [K in keyof T as FunctionKey<T, K>]: T[K]; }, dependentProperties: (keyof { [K_1 in keyof T as PropertyKey<T, K_1>]: T[K_1]; })[]): void;
declare type FunctionKey<T, K extends keyof T> = T[K] extends Function ? K : never;
declare type PropertyKey<T, K extends keyof T> = T[K] extends Function ? never : K;
declare type Methods<T> = keyof { [K in keyof T as FunctionKey<T, K>]: T[K]; };
declare type Properties<T> = keyof { [K in keyof T as PropertyKey<T, K>]: T[K]; };
