import { Test, TestingModule } from '@nestjs/testing';
import { ResourceTemplateController } from './resource-template.controller';
import { ResourceTemplateService } from './resource-template.service';

describe('ResourceTemplateController', () => {
  let controller: ResourceTemplateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourceTemplateController],
      providers: [ResourceTemplateService],
    }).compile();

    controller = module.get<ResourceTemplateController>(ResourceTemplateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
