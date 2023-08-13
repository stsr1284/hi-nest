import { Controller, Get, Param, Post, Delete, Patch, Put, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {

constructor(private readonly moviesService: MoviesService) {}

	@Get()
	async getAll(): Promise<Movie[]>{
		return this.moviesService.getAll();
	}

	// @Get("search")
	// search(@Query('year') seachingYear: string) {
	// 	return `We are searching for a movie made after: ${seachingYear}`;
	// }

	@Get('/:id')
	async getOne(@Param('id') movieId: string): Promise<Movie>{
		return this.moviesService.getOne(movieId);
	}

	@Post()
	async create(@Body() movieData): Promise<Movie> {
		return this.moviesService.create(movieData);
	}

	@Delete('/:id') 
	async remove(@Param('id') movieId: string): Promise<number> {
		return this.moviesService.deleteOne(movieId);
	}

	@Patch('/:id')
	async pathc(@Param('id') movieId: string, @Body() updateData: Movie): Promise<number> {
		return this.moviesService.update(movieId, updateData);
	}



}
