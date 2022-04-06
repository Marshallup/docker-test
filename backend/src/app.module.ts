import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        MongooseModule.forRoot(`mongodb://mongo_nestjs_container/${process.env.DB_NAME}`),
        UsersModule,
        RolesModule,
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}