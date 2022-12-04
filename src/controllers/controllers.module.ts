import { Module } from '@nestjs/common';
import { PredictController } from './predict.controller';
import { DbModule } from 'src/db';
import { ApiModule } from 'src/api';
import { PredictService } from 'src/predict';

@Module({
  imports: [DbModule, ApiModule],
  controllers: [PredictController],
  providers: [PredictService],
})
export class ControllersModule {}
