import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { UserEntity } from 'user/user.entity';

@Entity({name: 'projects'})
export class ProjectEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(type => UserEntity)
    user: UserEntity;
}