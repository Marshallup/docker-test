import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { GenresSeed } from 'src/genres/seeds/genres.seed';
import { GenresModule } from 'src/genres/genres.module';
import { RolesModule } from 'src/roles/roles.module';
import { RolesSeed } from 'src/roles/seeds/roles.seed';
import { UsersModule } from 'src/users/users.module';
import { UsersSeed } from 'src/users/seeds/users.seed';
import { ProfessionsSeed } from 'src/professions/seeds/professions.seed';
import { GeneralSeed } from './seeds.service';
import { ProfessionsModule } from 'src/professions/professions.module';

@Module({
    imports: [
        CommandModule,
        GenresModule,
        RolesModule,
        UsersModule,
        ProfessionsModule,
    ],
    providers: [
        GenresSeed,
        RolesSeed,
        GeneralSeed,
        UsersSeed,
        ProfessionsSeed,
    ],
    exports: [
        GenresSeed,
        RolesSeed,
        GeneralSeed,
        UsersSeed,
        ProfessionsSeed,
    ],
})
export class SeedsModule {}