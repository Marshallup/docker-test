import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';
import { Role } from 'src/roles/roles.schema';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({ example: 'televonea@gmail.com', description: 'Почта пользователя' })
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  banned: boolean;

  @Prop({ default: null })
  breed: string;

  @Prop({ default: null })
  banReason: string;

  @Prop({ type: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Role' } ] })
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);