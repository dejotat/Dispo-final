import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './components/country/country.module';
import { ActorModule } from './components/actor/actor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'jorge1993',
      database: 'testorm',
      entities: ['dist/entities/**/*.js'],
      synchronize: true,
      }),

    //TypeOrmModule.forRoot({
      //type: 'postgres',
      //host: 'ec2-3-226-163-72.compute-1.amazonaws.com',
      //port: 5432,
      //username: 'dmbgsnujobpbbm',
      //password:
     //'aa928019d60c01e7e235568553cb0850b30b367c8ae9026c4a86ea076e51ebce',
     //database: 'dc1bshqlq88th',
    //logging: false,
    // entities: ['dist/entities/**/*.js'],
     //synchronize: false,
     //}),

    CountryModule,

    ActorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
