import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  private saltOrRounds = 10;

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    let valid = true;
    const user = await this.usersService.findOneByEmail(email);
    if (!user) valid = false;
    else {
      const passwordIsMatch = await bcrypt.compare(password, user.password);

      if (!passwordIsMatch) valid = false;
    }

    if (valid) {
      const payload = { sub: user.id, email: user.email };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else throw new UnauthorizedException();
  }
}
