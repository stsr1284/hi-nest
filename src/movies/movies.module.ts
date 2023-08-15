import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { Movie } from './entities/movie.entity';


@Module({
  imports: [
	TypeOrmModule.forFeature([Movie]),
	AuthModule,
],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesService],
})
export class MoviesModule { }