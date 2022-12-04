import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbService } from './services';
import {
  NamePrediction,
  NamePredictionSchema,
} from './schemas/namePrediction.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NamePrediction.name, schema: NamePredictionSchema },
    ]),
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
