import { Point } from './point.model';

describe('Model', () => {
  let model: Point;
  beforeEach(() => {
    model = new Point({
      x: 1,
      y: 2,
    });
  });

  it('should be defined', () => {
    expect(model).toBeDefined();
  });

  it('should be frozen', () => {
    expect(Object.isFrozen(model)).toBeTruthy();
  });
});

describe('Model attributes', () => {
  let model: Point;
  beforeEach(() => {
    model = new Point({
      x: 1,
      y: 2,
    });
  });

  it('should be as intended', () => {
    expect(model.x).toEqual(1);
    expect(model.y).toEqual(2);
  });
});
