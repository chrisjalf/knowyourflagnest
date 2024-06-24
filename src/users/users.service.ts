import { ConflictException, Injectable } from '@nestjs/common';
import { DataSource, FindOptionsSelect, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

export type PrevUser = any;

@Injectable()
export class UsersService {
  private usersRepository: Repository<User>;
  private saltOrRounds = 10;

  constructor(private dataSource: DataSource) {
    this.usersRepository = this.dataSource.getRepository(User);
  }

  async register(dto: CreateUserDto) {
    const user = await this.findOneByEmail(dto.email);

    if (user) throw new ConflictException();
    else {
      dto.password = await bcrypt.hash(dto.password, this.saltOrRounds);
      this.save(dto);

      return {};
    }
  }

  async findOneById(id: number, selectPassword: boolean = false) {
    const selectables: FindOptionsSelect<User> = {
      id: true,
      email: true,
      name: true,
    };

    if (selectPassword) selectables['password'] = selectPassword;

    return this.usersRepository.findOne({
      where: { id },
      select: selectables,
    });
  }

  async findOneByEmail(email: string) {
    return this.usersRepository.findOneBy({ email });
  }

  async save(user: CreateUserDto) {
    this.usersRepository.save(user);
  }
}
