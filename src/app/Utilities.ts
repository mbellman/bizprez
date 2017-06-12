import { IMap, IEnum } from 'core/Types';

export namespace U {
  export function random (low: number, high: number): number {
    return low + Math.floor(Math.random() * (high - low + 1));
  }

  export function randomKey (object: IMap<any>): string {
    const keys: Array<string> = Object.keys(object);

    return keys[random(0, keys.length - 1)];
  }

  export function randomProp<T> (object: IMap<T>): T {
    return object[U.randomKey(object)];
  }

  export function randomFromEnum<T> (e: IEnum<T>): number | T {
    const key: string = U.randomKey(e);
    const keyAsNumber: number = Number(key);

    if (isNaN(keyAsNumber)) {
      return e[<any>key];
    }

    return keyAsNumber;
  }

  export function randomFromArray<T> (array: Array<T>): T {
    const index: number = U.random(0, array.length - 1);

    return array[index];
  }

  export function chance (probability: number): boolean {
    return Math.random() < probability;
  }

  export function loop (times: number, handler: () => any): void {
    for (let i = 0; i < times; i++) {
      handler();
    }
  }
}
