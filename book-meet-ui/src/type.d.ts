interface IRoom {
    id: string,
    name: string
}

interface RoomProps{
    room: IRoom
}

interface IBooking {
    id: string;
    timeStart: string;
    timeStop: string;
    room: IRoom;
}

interface BookingProps {
    booking: IBooking;
}

type ApiDataType = {
    message: string
    status: string
    rooms: IRoom[]
    room?: IRoom
}