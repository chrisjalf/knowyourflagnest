import { Test, TestingModule } from '@nestjs/testing';
import { ResourceTemplateService } from './resource-template.service';

describe('ResourceTemplateService', () => {
  let service: ResourceTemplateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourceTemplateService],
    }).compile();

    service = module.get<ResourceTemplateService>(ResourceTemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
