import { Test, TestingModule } from '@nestjs/testing';
import { TypeCounterpartiesController } from './type-counterparties.controller';

describe('TypeCounterpartiesController', () => {
  let controller: TypeCounterpartiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeCounterpartiesController],
    }).compile();

    controller = module.get<TypeCounterpartiesController>(TypeCounterpartiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
