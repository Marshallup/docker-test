import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.schema';
import { CreateUserDto, CreateUsersDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private roleService: RolesService
    ) {}

    async createUsers(dto: CreateUsersDto) {
        try {
            const users = await this.userModel.create(dto);

            return users;   
        } catch(error) {
            console.log(error.message);
        }
    }
    async createUser(dto: CreateUserDto) {
        const role = await this.roleService.getRoleByName('USER');

        try {
            const user = await this.userModel.create({ ...dto, roles: [ role._id ] });

            return user;
        } catch(error) {
            throw new HttpException('Ошибка при создании пользователя', HttpStatus.BAD_REQUEST);
        }
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
        const role = await this.roleService.getRoleByName(dto.name)
    
        if (role && user) {
            await this.userModel.findOneAndUpdate({ _id: user._id }, { roles: [ role._id ] });
            return dto;
        }

        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
    }

    async ban(dto: BanUserDto) {

    }
}
