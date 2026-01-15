import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
