import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NamePredictionDocument = HydratedDocument<NamePrediction>;

@Schema({ collection: 'NamePrediction' })
export class NamePrediction {
  @Prop()
  name: string;

  @Prop()
  gender: string;

  @Prop()
  nationality: string;
}

export const NamePredictionSchema =
  SchemaFactory.createForClass(NamePrediction);
