import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [PassportModule],
  controllers: [PostController],
  providers: [PostService, JwtStrategy, PrismaClient],
})
export class PostModule {}
