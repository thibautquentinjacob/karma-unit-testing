import { Helpers } from 'src/app/helpers/helpers';

export class Point {
  public readonly x: number;
  public readonly y: number;
  public readonly comments: string[];

  public constructor({ x, y }: { x: number; y: number }) {
    this.x = this._processX(x);
    this.y = this._processY(y);
    this.comments = [];

    Helpers.deepFreeze(this);
  }

  private _processX(x: number): number {
    return x;
  }

  private _processY(y: number): number {
    return y;
  }
}
