import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Genre, GenreDocument } from './genres.schema';
import { addGenreDto, addGenresDto } from './dto/create-genre.dto';

@Injectable()
export class GenresService {
    constructor(@InjectModel(Genre.name) private GenreModel: Model<GenreDocument>) {}

    async createGenre(dto: addGenreDto) {
        const candidate = await this.GenreModel.findOne({ name: dto.name });

        if (candidate) {
            throw new HttpException(`Жанр "${dto.name}" уже существует`, HttpStatus.BAD_REQUEST);
        }

        try {
            const genre = await this.GenreModel.create(dto);

            return genre;
        } catch(error) {
            throw new HttpException(`Ошибка при создании жанра "${dto.name}"`, HttpStatus.BAD_REQUEST);
        }
    }

    async createGenres(dto: addGenresDto) {

        try {
            const genres = await this.GenreModel.create(dto);

            return genres;
        } catch(error) {
            console.log(error.message);
        }
    }

}