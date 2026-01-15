import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService extends PrismaClient {
  async onModuleInit() {
    await this.$connect();
  }

  async findAll() {
    return this.user.findMany({
      select: { id: true, email: true, name: true, createdAt: true },
    });
  }

  async findOne(id: number) {
    const user = await this.user.findUnique({
      where: { id },
      select: { id: true, email: true, name: true, createdAt: true },
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
