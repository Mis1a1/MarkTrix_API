import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers';
import { ServicesModule } from './predict';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ServicesModule,
    ControllersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/local'),
  ],
})
export class AppModule {}
