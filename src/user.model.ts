import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'users' })
export class User extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    photo: String;

    @Column()
    email: string;

    @Column()
    phone: string;


    constructor (first_name: string, last_name: string, photo: String, email: string, phone: string, id?: number) {
        super();
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.photo = photo;
        this.email = email;
        this.phone = phone;
    }
}