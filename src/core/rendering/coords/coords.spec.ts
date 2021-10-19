import { Coords } from './coords';

describe('Coords', () => {
  let coords: Coords;

  beforeEach(() => {
    coords = new Coords();
  });

  it('should start at (0, 0)', () => {
    expect(coords.toObject()).toEqual({
      x: 0,
      y: 0,
    });
  });

  it('should sum with the move method', () => {
    coords.reset({ x: 10, y: 250 });
    coords.move({ y: 10 });

    expect(coords.y).toEqual(260);

    coords.move({ x: -10 });

    expect(coords.x).toEqual(0);
  });
});
