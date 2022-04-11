import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { Genre } from 'src/genres/genres.schema';
import { Profession } from 'src/professions/professions.schema';
import { Film } from 'src/films/films.schema';

export type PeopleDocument = People & Document;

@Schema()
export class People {
  @Prop({ required: true, unique: true, index: true })
  name: string;

  @Prop()
  dateOfBirth: Date;

  @Prop({ type: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' } ] })
  genres: Genre[];

  @Prop({ type: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Profession' } ] })
  professions: Profession[];

  @Prop({ type: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Film' } ] })
  films: Film[];

//   @Prop({ type: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Film' } ] })
//   films: Film[];
}

export const PeopleSchema = SchemaFactory.createForClass(People);