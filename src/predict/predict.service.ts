import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db';
import { ApiService } from 'src/api';
import { CreatePredictionDto } from '../db/dtos';

@Injectable()
export class PredictService {
  constructor(
    private readonly db: DbService,
    private readonly api: ApiService,
  ) {}
  async getNamePrediction(
    name: string,
    options: object,
  ): Promise<CreatePredictionDto[]> {
    let prediction;

    prediction = await this.db.list(name, options);

    console.log(`|getNamePrediction name: ${name}, options: ${options}|`);

    if (!prediction.length) {
      const gender = await this.api.getGender(name);
      const nationality = await this.api.getNationality(name);
      console.log(`|gender: ${JSON.stringify(gender)}|`);
      console.log(`|nationality: ${JSON.stringify(nationality)}|`);
      prediction = await this.db.createOne({ name, gender, nationality });
    }
    console.log(`|getNamePrediction prediction: ${prediction}|`);

    return prediction;
  }

  async getAll(): Promise<CreatePredictionDto[]> {
    return this.db.listAll();
  }
}
