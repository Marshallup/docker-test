import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Film, FilmSchema } from './films.schema';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
              {
                name: Film.name,
                schema: FilmSchema,
              },
            ],
        ),
    ],
})
export class FilmsModule {}