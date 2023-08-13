import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { JwtModule } from '@nestjs/jwt';

import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { Movie } from './entities/movie.entity';


@Module({
  imports: [
	TypeOrmModule.forFeature([Movie]),
	// JwtModule.register({
	// 	secret: "미정",
	// })
],
  controllers: [MoviesController],
  providers: [MoviesService]
})
export class MoviesModule { }