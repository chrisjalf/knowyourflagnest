import {
  Body,
  Controller,
  Request,
  Get,
  Post,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  async register(@Body() dto: CreateUserDto) {
    return this.usersService.register(dto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const { user } = req;
    const { sub } = user;

    return this.usersService.findOneById(sub);
  }

  @UseGuards(AuthGuard)
  @Delete('delete')
  async delete(@Request() req) {
    const { user } = req;
    const { sub } = user;

    return this.usersService.delete(sub);
  }
}
