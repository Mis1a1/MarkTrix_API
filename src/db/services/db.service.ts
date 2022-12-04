import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  NamePrediction,
  NamePredictionDocument,
} from '../schemas/namePrediction.schema';
import { CreatePredictionDto } from '../dtos';

@Injectable()
export class DbService {
  constructor(
    @InjectModel(NamePrediction.name)
    private readonly namePrediction: Model<NamePredictionDocument>,
  ) {
    this.namePrediction.deleteMany();
  }

  async list(name: string, options: object): Promise<NamePrediction[]> {
    const response = await this.namePrediction.find({ name }, options);
    console.log(`|list response: ${response}|`);
    return response;
  }

  async listAll(): Promise<NamePrediction[]> {
    return this.namePrediction.find().exec();
  }

  async createOne(createPredictionDto: CreatePredictionDto) {
    const predict = new this.namePrediction(createPredictionDto);

    return predict.save();
  }
}
