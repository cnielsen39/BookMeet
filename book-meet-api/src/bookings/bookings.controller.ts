import { Body, Controller, Get, Post } from '@nestjs/common';
import { Room } from 'src/rooms/room.entity';
import { Booking } from './booking.entity';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
    constructor(private bookingsService: BookingsService){}

    @Get()
    getBookings(): Promise<Booking[]> {
        return this.bookingsService.getBookings();
    }

    @Post()
    createBooking(@Body()room: Room, @Body()timeStart: string, @Body()timeStop: string): Promise<Booking> {
        return this.bookingsService.createBooking(room, timeStart, timeStop);
    }

}
