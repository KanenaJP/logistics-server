import { Test, TestingModule } from '@nestjs/testing';
import { TransportationOrdersController } from './transportation-orders.controller';

describe('TransportationOrdersController', () => {
  let controller: TransportationOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransportationOrdersController],
    }).compile();

    controller = module.get<TransportationOrdersController>(TransportationOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
