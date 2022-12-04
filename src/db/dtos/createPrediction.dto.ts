import { IsString } from 'class-validator';

export class CreatePredictionDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly gender: string;

  @IsString()
  readonly nationality: string;
}
