import { Controller, Get } from "@nestjs/common";
import { GenresService } from "./genres.service";

@Controller('genres')
export class GenresController {

    constructor(private genreService: GenresService) {}

    @Get()
    getByValue() {
        return {
            ss: 'ee111'
        }
    }
}
