import { Room } from "src/rooms/room.entity";
import { EntityRepository, Repository } from "typeorm";
import { Booking } from "./booking.entity";

@EntityRepository(Booking)
export class BookingsRepository extends Repository<Booking> {
    
    async createBooking(room: Room, timeStart: string, timeStop: string): Promise<Booking> {
        const booking = this.create({
            room,
            timeStart,
            timeStop,
        });

        await this.save(booking);
        return booking;
    }
    
}