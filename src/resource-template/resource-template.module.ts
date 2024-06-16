import { Module } from '@nestjs/common';
import { ResourceTemplateService } from './resource-template.service';
import { ResourceTemplateController } from './resource-template.controller';

@Module({
  controllers: [ResourceTemplateController],
  providers: [ResourceTemplateService],
})
export class ResourceTemplateModule {}
