export interface ICoords {
  x: number;
  y: number;
}

export class Coords implements ICoords {
  private static readonly _DEFAULT_COORD_VALUE = 0;

  private _x = 0;
  private _y = 0;

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }

  constructor(coords?: ICoords) {
    this.reset(coords);
  }

  public toObject(): ICoords {
    return {
      x: this._x,
      y: this._y,
    };
  }

  /**
   * Sums to the current coords the new coords
   * @param coords quantity of values to move
   */
  public move({ x, y }: Partial<ICoords>): Coords {
    if (x) this._x += x;
    if (y) this._y += y;

    return this;
  }

  /**
   * Reset coords to a new value, default is x = 0, y = 0
   * @param coords new coords state
   * @returns
   */
  public reset(coords?: Partial<ICoords>): Coords {
    const { _DEFAULT_COORD_VALUE } = Coords;

    this._x = coords?.x || _DEFAULT_COORD_VALUE;
    this._y = coords?.y || _DEFAULT_COORD_VALUE;

    return this;
  }
}
