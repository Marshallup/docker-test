import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from './roles.schema';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role.name) private RoleModel: Model<RoleDocument>) {}

    async createRole(dto: CreateRoleDto) {
        const role = await this.RoleModel.create(dto);
        return role;
    }

    async getRoleByValue(value: string) {
        const role = await this.RoleModel.findOne({ value });

        return role;
    }

    async getRoleByID(id: string) {
        const role = await this.RoleModel.findById(id);

        return role;
    }
}
