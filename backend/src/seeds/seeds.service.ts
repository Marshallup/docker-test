import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { RolesSeed } from 'src/roles/seeds/roles.seed';
import { GenresSeed } from 'src/genres/seeds/genres.seed';
import { UsersSeed } from 'src/users/seeds/users.seed';
import { ProfessionsSeed } from 'src/professions/seeds/professions.seed';

@Injectable()
export class GeneralSeed {
    constructor(
        private rolesSeed: RolesSeed,
        private genresSeed: GenresSeed,
        private usersSeed: UsersSeed,
        private professionsSeed: ProfessionsSeed
    ) {}

    @Command({ command: 'create:all', describe: 'create all' })
    async create() {
        await this.genresSeed.create();
        await this.rolesSeed.create();
        await this.usersSeed.create();
        await this.professionsSeed.create();
    }
}