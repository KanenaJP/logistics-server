import { Test, TestingModule } from '@nestjs/testing';
import { LocalitiesController } from './localities.controller';

describe('LocalitiesController', () => {
  let controller: LocalitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocalitiesController],
    }).compile();

    controller = module.get<LocalitiesController>(LocalitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
