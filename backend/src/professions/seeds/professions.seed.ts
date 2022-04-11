import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { ProfessionsService } from '../professions.service';

@Injectable()
export class ProfessionsSeed {
    constructor(private professionsService: ProfessionsService) {}

    @Command({ command: 'create:profession', describe: 'create a professions' })
    async create() {
        await this.professionsService.createProfessions([
            {
                name: 'actor',
                description: 'Актёр',
            },
            {
                name: 'producer',
                description: 'Продюсер',
            },
        ]);
    }
}