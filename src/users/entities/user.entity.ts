import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	Unique,
} from "typeorm";

@Entity()
@Unique(['s_id'])
export class User {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	s_id: string;
	
}