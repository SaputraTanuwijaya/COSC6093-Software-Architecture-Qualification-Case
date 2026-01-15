import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'My Title', description: 'Post title' })
  title: string;

  @ApiProperty({ example: 'Content goes here', description: 'Post content' })
  content: string;
}
