import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { RegexHeltper } from 'src/helpers/regex.helper';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Matches(RegexHeltper.password)
  password: string;
}
