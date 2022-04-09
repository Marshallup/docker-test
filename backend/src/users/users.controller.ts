import { Body, Controller, Get, Post, Put, UseGuards, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.schema';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    
    constructor(private usersService: UsersService) {}


    @Get('test')
    testGet() {
        return [ { success: true, status: 201 } ];
    }

    @ApiOperation({ summary: 'Создание пользователя' })
    @ApiResponse({ status: 200, type: User })
    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @Roles('USER')
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @Roles('USER')
    @UseGuards(RolesGuard)
    @Put('role')
    addRoles(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }

    @Roles('USER')
    @UseGuards(RolesGuard)
    @Get('/ban')
    ban(@Body() dto: BanUserDto) {
        return this.usersService.ban(dto);
    }
}
