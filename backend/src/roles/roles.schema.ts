import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  @ApiProperty({ example: 'user', description: 'Роль пользователя' })
  @Prop({ required: true, unique: true, index: true })
  name: string;

  @Prop({ required: true, unique: true, index: true })
  description: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);