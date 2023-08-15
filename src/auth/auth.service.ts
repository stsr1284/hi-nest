import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Payload } from 'src/dto/dtd.payload';
import { Movie } from 'src/movies/entities/movie.entity';
import { MoviesService } from 'src/movies/movies.service';

@Injectable()
export class AuthService {
	constructor(
		private moviesService: MoviesService,
		private jwtService: JwtService,
		) {}

	async getAccessToken(userId: string): Promise<{accessToken}> {
		const payload = { userId };
		const accessToken = await this.jwtService.sign(payload);

		return { accessToken };
	}

	async tokenValidateMovie(payload: Payload): Promise<Movie | undefined> {
		return await this.moviesService.getOne(payload.id);
	}
}
