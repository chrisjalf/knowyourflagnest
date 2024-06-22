import { Body, ConflictException, Controller, Post } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  private saltOrRounds = 10;

  @Post('/register')
  async register(@Body() dto: CreateUserDto) {
    const user = await this.usersService.findOneByEmail(dto.email);
    if (user) throw new ConflictException();
    else {
      dto.password = await bcrypt.hash(dto.password, this.saltOrRounds);
      this.usersService.save(dto);

      return {};
    }
  }
}
