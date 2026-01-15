import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [PassportModule],
  controllers: [UserController],
  providers: [UserService, JwtStrategy, PrismaClient],
})
export class UserModule {}
