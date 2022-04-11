import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users.service';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersSeed {
    constructor(private usersService: UsersService, private rolesService: RolesService) {}

    @Command({ command: 'create:users', describe: 'create a users' })
    async create() {
        const adminRole = await this.rolesService.getRoleByName('ADMIN');
        const userRole = await this.rolesService.getRoleByName('USER');

        await this.usersService.createUsers([
            {
                email: 'admin@admin.com',
                password: '123456',
                roles: [ adminRole._id, userRole._id ],
            },
            {
                email: 'televonvea@gmail.com',
                password: '123456',
                roles: [ userRole._id ],
            }
        ]);
    }
}