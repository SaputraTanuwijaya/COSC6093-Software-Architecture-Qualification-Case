import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService extends PrismaClient {
  async onModuleInit() {
    await this.$connect();
  }

  async create(createPostDto: CreatePostDto, userId: number) {
    return this.post.create({
      data: {
        title: createPostDto.title,
        content: createPostDto.content,
        userId: userId,
      },
    });
  }

  async findAll() {
    return this.post.findMany();
  }

  async findByUser(userId: number) {
    return this.post.findMany({ where: { userId } });
  }

  async findOne(id: number) {
    const post = await this.post.findUnique({ where: { id } });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto, userId: number) {
    const post = await this.findOne(id);
    if (post.userId !== userId)
      throw new ForbiddenException('You can only update your own posts');

    return this.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  async remove(id: number, userId: number) {
    const post = await this.findOne(id);
    if (post.userId !== userId)
      throw new ForbiddenException('You can only delete your own posts');

    return this.post.delete({ where: { id } });
  }
}
