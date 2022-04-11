import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { Genre } from 'src/genres/genres.schema';
import { People } from 'src/peoples/peoples.schema';

export type PeopleDocument = Film & Document;

@Schema()
export class Film {
  @Prop({ required: true, unique: true, index: true })
  name: string;

  @Prop()
  releaseDate: Date;

  @Prop()
  releaseDateRF: Date;

  @Prop()
  excerpt: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop()
  kinopoiskID: number;

  @Prop()
  length: number;

  @Prop({ type: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' } ] })
  genres: Genre[];

  @Prop({ type: [ { type: mongoose.Schema.Types.ObjectId, ref: 'People' } ] })
  peoples: People[];
}

export const FilmSchema = SchemaFactory.createForClass(Film);