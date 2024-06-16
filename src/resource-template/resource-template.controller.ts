import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResourceTemplateService } from './resource-template.service';
import { CreateResourceTemplateDto } from './dto/create-resource-template.dto';
import { UpdateResourceTemplateDto } from './dto/update-resource-template.dto';

@Controller('resource-template')
export class ResourceTemplateController {
  constructor(private readonly resourceTemplateService: ResourceTemplateService) {}

  @Post()
  create(@Body() createResourceTemplateDto: CreateResourceTemplateDto) {
    return this.resourceTemplateService.create(createResourceTemplateDto);
  }

  @Get()
  findAll() {
    return this.resourceTemplateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourceTemplateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResourceTemplateDto: UpdateResourceTemplateDto) {
    return this.resourceTemplateService.update(+id, updateResourceTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourceTemplateService.remove(+id);
  }
}
