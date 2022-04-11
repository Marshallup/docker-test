import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { RolesService } from '../roles.service';

@Injectable()
export class RolesSeed {
    constructor(private rolesService: RolesService) {}

    @Command({ command: 'create:roles', describe: 'create a roles' })
    async create() {
        await this.rolesService.createRoles([
            {
                name: 'ADMIN',
                description: 'Админ',
            },
            {
                name: 'USER',
                description: 'Пользователь',
            },
        ])
    }
}