import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenresController } from './genres.controller';
import { Genre, GenreSchema } from './genres.schema';
import { GenresService } from './genres.service';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
              {
                name: Genre.name,
                schema: GenreSchema,
              },
            ],
        ),
    ],
    controllers: [
        GenresController,
    ],
    providers: [
        GenresService,
    ],
    exports: [
        GenresService,
    ]
})
export class GenresModule {}