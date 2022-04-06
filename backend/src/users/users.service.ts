import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private roleService: RolesService
    ) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userModel.create(dto);
        const role = await this.roleService.getRoleByValue('USER');

        await this.userModel.findOneAndUpdate({ email: dto.email }, { roles: [ role._id ] });

        return this.userModel.findOne({ email: dto.email });
    }

    async getAllUsers() {
        const users = await this.userModel.find().populate('roles');
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userModel.findOne({ email }).populate('roles');

        return user;
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userModel.findById(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value)
    
        if (role && user) {
            await this.userModel.findOneAndUpdate({ _id: user._id }, { roles: [ role._id ] });
            return dto;
        }

        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
    }

    async ban(dto: BanUserDto) {

    }
}
