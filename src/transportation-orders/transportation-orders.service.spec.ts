import { Test, TestingModule } from '@nestjs/testing';
import { TransportationOrdersService } from './transportation-orders.service';

describe('TransportationOrdersService', () => {
  let service: TransportationOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransportationOrdersService],
    }).compile();

    service = module.get<TransportationOrdersService>(TransportationOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
