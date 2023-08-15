import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class MoviesService {
	// constructor(
	// 	@InjectRepository(Movie)
	// 	private moviesRepository: Repository<Movie>
	// ) {}
	// // private movies: Movie[] = [];

	// async create(movie: Movie): Promise<Movie> {
	// 	const newMovie = this.moviesRepository.create(movie);
	// 	return await this.moviesRepository.save(newMovie);
	// }

	// async getAll(): Promise<Movie[]> {
	// 	return this.moviesRepository.find();
	// }

	// async getOne(id:string): Promise<Movie> {
	// 	const intId: number = parseInt(id);
	// 	return await this.moviesRepository.findOneBy({ id: intId });
	// 	// movie => movie.id === parseInt(id)
	// }

	// async update(id: string, movie: Movie): Promise<number> {
	// 	const intId: number = parseInt(id);
	// 	await this.moviesRepository.update(intId, movie);
	// 	return intId;
	// }

	// async deleteOne(id:string): Promise<number> {
	// 	const intId: number = parseInt(id);
	// 	await this.moviesRepository.delete(intId);
	// 	// this.movies.filter(movie => movie.id !== +id);
	// 	return intId;
	// }

}