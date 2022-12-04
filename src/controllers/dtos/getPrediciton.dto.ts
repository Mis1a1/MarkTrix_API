import { IsString } from 'class-validator';

export class GetPredictionDto {
  @IsString()
  readonly sort: string;
}
