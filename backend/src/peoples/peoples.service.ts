import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreatePeoplesDto } from "./dto/create-people.dto";
import { People, PeopleDocument } from "./peoples.schema";

@Injectable()
export class PeoplesService {
    constructor(@InjectModel(People.name) private PeopleModel: Model<PeopleDocument>) {}

    async createPeoples(dto: CreatePeoplesDto) {
        try {
            const peoples = this.PeopleModel.create(dto);

            return peoples;
        } catch(error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}