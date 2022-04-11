import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ProfessionDocument = Profession & Document;

@Schema()
export class Profession {
  @Prop({ required: true, unique: true, index: true })
  name: string;

  @Prop()
  description: string;
}

export const ProfessionSchema = SchemaFactory.createForClass(Profession);