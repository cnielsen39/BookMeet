import { Injectable, NotFoundException } from '@nestjs/common';
import { Room } from './room.entity';
import {v4 as uuid} from 'uuid'
import { RoomsRepository } from './rooms.repository';

@Injectable()
export class RoomsService {
    constructor(private roomsRepository: RoomsRepository){}

    private rooms: Room[] = [];

    getAllRooms() : Promise<Room[]> {
        return this.roomsRepository.find();
    }

    async getRoom(id: string): Promise<Room> {
       const found = await this.roomsRepository.findOne(id);
       if(!found) throw new NotFoundException();

       return found;
    }

    async createRoom(name: string): Promise<Room> {
        return this.roomsRepository.createRoom(name);
    }

    async deleteRoom(id: string): Promise<void> {
        const result = await this.roomsRepository.delete(id);

        if(result.affected === 0) throw new NotFoundException();
    }
}
