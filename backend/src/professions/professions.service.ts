import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreateProfessionsDto } from "./dto/create-profession.dto";
import { Profession, ProfessionDocument } from "./professions.schema";

@Injectable()
export class ProfessionsService {
    constructor(@InjectModel(Profession.name) private ProfessionModel: Model<ProfessionDocument>) {}

    async createProfessions(dto: CreateProfessionsDto) {
        try {
            const professions = this.ProfessionModel.create(dto);

            return professions;
        } catch(error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}