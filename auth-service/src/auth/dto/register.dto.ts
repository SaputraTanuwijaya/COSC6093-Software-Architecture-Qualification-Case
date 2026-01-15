import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    example: 'test@binus.edu',
    description: 'The email of the user',
  })
  email: string;

  @ApiProperty({ example: 'secret123', description: 'The password' })
  password: string;

  @ApiProperty({ example: 'Anak Binusian', description: 'Full name' })
  name: string;
}
