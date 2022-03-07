import { EntityRepository, Repository } from "typeorm";
import { Room } from "./room.entity";

@EntityRepository(Room)
export class RoomsRepository extends Repository<Room> {

    async createRoom(name: string): Promise<Room> {
        const room = this.create({
            name
        });

        await this.save(room);
        return room;
    }
}