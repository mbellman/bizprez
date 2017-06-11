import { IMap, IEnum } from 'core/Types';

export namespace U {
  export function random (low: number, high: number): number {
    return low + Math.floor(Math.random() * (high - low + 1));
  }

  export function randomKey (object: IMap<any>): string {
    const keys: Array<string> = Object.keys(object);

    return keys[random(0, keys.length - 1)];
  }

  export function randomProp (object: IMap<any>): any {
    return object[U.randomKey(object)];
  }

  export function randomFromEnum (e: IEnum): number {
    const key: string = U.randomKey(e);
    const number: number = Number(key);

    return isNaN(number) ? Number(e[<any>key]) : number;
  }

  export function randomFromArray<T> (array: Array<T>): T {
    const index: number = U.random(0, array.length - 1);

    return array[index];
  }

  export function loop (times: number, handler: () => any): void {
    for (let i = 0; i < times; i++) {
      handler();
    }
  }
}
