import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserCredentialDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
