import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [RoomsModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'book-meet',
    autoLoadEntities: true,
    synchronize: true
  }),
  BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
