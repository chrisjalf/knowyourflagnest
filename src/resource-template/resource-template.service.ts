import { Injectable } from '@nestjs/common';
import { CreateResourceTemplateDto } from './dto/create-resource-template.dto';
import { UpdateResourceTemplateDto } from './dto/update-resource-template.dto';

@Injectable()
export class ResourceTemplateService {
  create(createResourceTemplateDto: CreateResourceTemplateDto) {
    return 'This action adds a new resourceTemplate';
  }

  findAll() {
    return `This action returns all resourceTemplate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resourceTemplate`;
  }

  update(id: number, updateResourceTemplateDto: UpdateResourceTemplateDto) {
    return `This action updates a #${id} resourceTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} resourceTemplate`;
  }
}
