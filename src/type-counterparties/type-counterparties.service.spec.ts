import { Test, TestingModule } from '@nestjs/testing';
import { TypeCounterpartiesService } from './type-counterparties.service';

describe('TypeCounterpartiesService', () => {
  let service: TypeCounterpartiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeCounterpartiesService],
    }).compile();

    service = module.get<TypeCounterpartiesService>(TypeCounterpartiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
