import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Room } from './room.entity';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
    constructor(private roomsService: RoomsService){}

    @Get()
    getAllRooms(): Promise<Room[]> {
        return this.roomsService.getAllRooms();
    }

    @Get('/:id') 
    GetRoom(@Param('id') id: string): Promise<Room> {
        return this.roomsService.getRoom(id);
    }

    @Post()
    createRoom(@Body('name') name:string): Promise<Room> {
        return this.roomsService.createRoom(name);
    }

    @Delete('/:id')
    deleteRoom(@Param('id') id:string): Promise<void> {
        return this.roomsService.deleteRoom(id);
    }
}
