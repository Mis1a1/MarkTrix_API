import { Controller, Post, Body, Param, UseFilters, Get } from '@nestjs/common';
import { PredictService } from '../predict/predict.service';
import { HttpExceptionFilter } from '../exceptions/exception.filter';
import { GetPredictionDto } from './dtos';
import { CreatePredictionDto } from 'src/db/dtos';

type paramOptions = {
  name: string;
};

@Controller('predict')
export class PredictController {
  constructor(private readonly predictService: PredictService) {}

  @Get(':name')
  @UseFilters(new HttpExceptionFilter())
  async getPredictionsList(
    @Param() params: paramOptions,
  ): Promise<CreatePredictionDto[]> {
    const { name } = params;
    console.log(`|getPredictionsList name:${name}|`);
    const response = await this.predictService.getNamePrediction(name, {});
    return response;
  }

  @Get()
  async getAll() {
    const all = await this.predictService.getAll();
    console.log('all found', all);
    return all;
  }
}
