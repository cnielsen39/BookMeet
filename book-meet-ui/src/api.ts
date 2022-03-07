import axios, {AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const getRooms = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const rooms: AxiosResponse<ApiDataType> = await axios.get(baseUrl + "/rooms");
        console.log(rooms);
        return rooms;
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export const deleteRoom = async (id: string): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedRoom: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/rooms/${id}`
        );
        return deletedRoom;
    } catch (error: any) {
        throw new Error(error)
    }
}