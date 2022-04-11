import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'televonea@gmail.com', description: 'Почта пользователя' })
    @IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, { message: 'Некорректный email' })
    readonly email: string;
    @Length(4, 16, { message: 'Не меньше 4 и не больше 16' })
    readonly password: string;
    readonly roles?: string[] = [];
}

export type CreateUsersDto = CreateUserDto[];