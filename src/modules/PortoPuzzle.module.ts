import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { PortoPuzzleService } from '../service/PortoPuzzle.service';
import { PortoPuzzleRepository } from '../repository/PortoPuzzle.repository';
import { PortoPuzzleController } from '../controller/PortoPuzzle.controller';
import {
  PortoPuzzleModelName,
  PortoPuzzleSchema,
} from '../schema/PortoPuzzle.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PortoPuzzleModelName, schema: PortoPuzzleSchema },
    ]),
    ScheduleModule.forRoot(),
  ],
  controllers: [PortoPuzzleController],
  providers: [PortoPuzzleService, PortoPuzzleRepository],
})
export class PortoPuzzleModule {}
