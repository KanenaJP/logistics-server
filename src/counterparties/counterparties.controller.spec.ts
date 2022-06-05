import { Test, TestingModule } from '@nestjs/testing';
import { CounterpartiesController } from './counterparties.controller';

describe('CounterpartiesController', () => {
  let controller: CounterpartiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CounterpartiesController],
    }).compile();

    controller = module.get<CounterpartiesController>(CounterpartiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
