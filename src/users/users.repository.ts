import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { AuthCredentialsDto } from 'src/auth/dto/auth.authcredentialdto';


@Injectable()
export class UsersRepository {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>
	) {}

	async createUser(authcredentialdto: AuthCredentialsDto): Promise<User> {
		const { s_id } = authcredentialdto;
		const newuser = this.usersRepository.create({s_id});

		try {
			return await this.usersRepository.save(newuser);
		} catch (error) {
			console.log("error: ", error.code);
			if (error.code === 'ER_DUP_ENTRY') {
				throw new ConflictException("Existing username");
			} else {
				throw new InternalServerErrorException();
			}
		}
	}

	async create(user: User): Promise<User> {
		const newuser = this.usersRepository.create(user);
		return await this.usersRepository.save(newuser);
	}

	async getAll(): Promise<User[]> {
		return this.usersRepository.find();
	}

	async getOne(id:string): Promise<User> {
		return await this.usersRepository.findOneBy({s_id : id});
		// user => user.id === parseInt(id)
	}

	async update(id: string, user: User): Promise<number> {
		const intId: number = parseInt(id);
		await this.usersRepository.update(intId, user);
		return intId;
	}

	async deleteOne(id:string): Promise<number> {
		const intId: number = parseInt(id);
		await this.usersRepository.delete(intId);
		// this.users.filter(user => user.id !== +id);
		return intId;
	}
}