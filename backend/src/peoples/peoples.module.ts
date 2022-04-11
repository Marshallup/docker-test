import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { People, PeopleSchema } from './peoples.schema';
import { PeoplesService } from './peoples.service';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
              {
                name: People.name,
                schema: PeopleSchema,
              },
            ],
        ),
    ],
    providers: [
      PeoplesService,
    ],
    exports: [
      PeoplesService,
    ],
})
export class PeoplesModule {}