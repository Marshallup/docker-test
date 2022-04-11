import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from './roles.schema';
import { CreateRoleDto, CreateRolesDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role.name) private RoleModel: Model<RoleDocument>) {}

    async createRole(dto: CreateRoleDto) {
        const role = await this.RoleModel.create(dto);
        return role;
    }

    async getRoleByName(name: string) {
        try {
            const role = await this.RoleModel.findOne({ name });

            if (!role) {
                throw new HttpException('Роли не найдено!', HttpStatus.NOT_FOUND );
            }

            return role;
        } catch(error) {
            throw new HttpException('Ошибка при получении роли', HttpStatus.NOT_FOUND );
        }
    }

    async getRoleByID(id: string) {
        const role = await this.RoleModel.findById(id);

        return role;
    }

    async createRoles(dto: CreateRolesDto) {
        try {
            const roles = await this.RoleModel.create(dto);

            return roles;
        } catch(error) {
            console.log(error.message);
        }
    }
}
