import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type GenreDocument = Genre & Document;

@Schema()
export class Genre {
  @Prop({ required: true, unique: true, index: true })
  name: string;

  @Prop({ required: true, index: true })
  description: string;
}

export const GenreSchema = SchemaFactory.createForClass(Genre);