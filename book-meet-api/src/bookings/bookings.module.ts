import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './booking.entity';
import { BookingsController } from './bookings.controller';
import { BookingsRepository } from './bookings.repository';
import { BookingsService } from './bookings.service';

@Module({
  imports:[TypeOrmModule.forFeature([BookingsRepository, Booking])],
  controllers: [BookingsController],
  providers: [BookingsService]
})
export class BookingsModule {}
