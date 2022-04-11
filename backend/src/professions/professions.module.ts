import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessionsService } from './professions.service';
import { Profession, ProfessionSchema } from './professions.schema';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
              {
                name: Profession.name,
                schema: ProfessionSchema,
              },
            ],
        ),
    ],
    providers: [
        ProfessionsService
    ],
    exports: [
        ProfessionsService
    ]
})
export class ProfessionsModule {}