import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PortoPuzzleModule } from './modules/PortoPuzzle.module';

@Module({
  imports: [DatabaseModule, PortoPuzzleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
