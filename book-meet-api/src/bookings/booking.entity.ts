import { Room } from "src/rooms/room.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Booking {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    timeStart: string;

    @Column()
    timeStop: string;

    @ManyToOne(() => Room, room => room.bookings)
    room: Room;
}