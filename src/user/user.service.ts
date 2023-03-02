import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findFirst({
      where: { id },
    });
  }

  update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.prisma.user.update({ data: updateUserDto, where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
