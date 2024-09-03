import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { genSaltSync, hashSync } from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';

import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private UserModel: Model<User>,
  ) {}

  getHasPassword = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  };
  async create(createUserDto: CreateUserDto) {
    // return createUserDto;
    const hashPassword = this.getHasPassword(createUserDto.password);
    const users = await this.UserModel.create({
      email: createUserDto.email,
      password: hashPassword,
      name: createUserDto.name,
    });
    return users;
  }

  // async create(email: string, password: string, name: string) {
  //   const hashPassword = this.getHasPassword(password);
  //   const users = await this.UserModel.create({
  //     email,
  //     password: hashPassword,
  //     name,
  //   });
  //   return users;
  // }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
