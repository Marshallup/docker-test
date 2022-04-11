import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { PeoplesService } from '../peoples.service';
import { GenresService } from 'src/genres/genres.service';

@Injectable()
export class ProfessionsSeed {
    constructor(private peoplesService: PeoplesService, private genresService: GenresService) {}

    @Command({ command: 'create:profession', describe: 'create a professions' })
    async create() {
        // const fantasy = this.genresService.

        await this.peoplesService.createPeoples([
            {
                name: 'фильм',
                dateOfBirth: new Date('11.04.1992'),
                genres: [],
                professions: [],
                films: [],
            },
        ]);
    }
}