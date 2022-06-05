import { CarsDto } from './car.dto';

describe('CarsDto', () => {
  it('should be defined', () => {
    expect(new CarsDto()).toBeDefined();
  });
});
