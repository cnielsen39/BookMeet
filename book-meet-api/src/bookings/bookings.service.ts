import { Injectable, NotFoundException } from '@nestjs/common';
import { Room } from 'src/rooms/room.entity';
import { Booking } from './booking.entity';
import { BookingsRepository } from './bookings.repository';

@Injectable()
export class BookingsService {
    constructor(private bookingsRepository: BookingsRepository){}

    async createBooking(room: Room, timeStart: string, timeStop: string): Promise<Booking> {
        return this.bookingsRepository.createBooking(room, timeStart, timeStop);
    }

    async getBookings(): Promise<Booking[]> {
        return await this.bookingsRepository.find({relations: ['room']});
    }
}
