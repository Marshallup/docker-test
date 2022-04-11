import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { GenresService } from '../genres.service';

@Injectable()
export class GenresSeed {
    constructor(private genresService: GenresService) {}

    @Command({ command: 'create:genres', describe: 'create a genres' })
    async create() {
        await this.genresService.createGenres([
            {
                name: 'detective',
                description: 'Детектив',
            },
            {
                name: 'fantasy',
                description: 'Фантастика'
            },
            {
                name: 'thriller',
                description: 'Триллер'
            }
        ]);
    }
}