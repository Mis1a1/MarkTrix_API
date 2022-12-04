import { Module } from '@nestjs/common';
import { PredictService } from './predict.service';
import { DbModule } from 'src/db';
import { ApiModule } from 'src/api';

@Module({
  imports: [DbModule, ApiModule],
  providers: [PredictService],
  exports: [PredictService],
})
export class ServicesModule {}
