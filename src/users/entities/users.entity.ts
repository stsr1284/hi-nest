import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
} from "typeorm";

@Entity()
export class Movie {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	s_id: string;

	@Column()
	year: number;

	@Column()
	genres: string;
}