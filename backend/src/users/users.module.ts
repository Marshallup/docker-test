import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { RolesModule } from 'src/roles/roles.module';
import { UsersController } from './users.controller';
import { User, UserSchema } from './users.schema';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: User.name,
          schema: UserSchema,
        }
      ]
    ),
    RolesModule,
    forwardRef(() => AuthModule),

  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [ UsersService ],
})
export class UsersModule {}
