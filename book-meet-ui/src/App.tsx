import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { deleteRoom, getRooms } from './api';
import RoomCard from './components/RoomCard';
import { Container, Row } from 'react-bootstrap';
import AddBooking from './components/AddBooking';

const App: React.FC = () => {
  const [rooms, setRooms] = useState<IRoom[]>();

  useEffect(() => {
    fetchRooms()
  }, [])

  const fetchRooms = (): void => {
    getRooms().then(({data: room}: IRoom[] | any) => 
      setRooms(room))
      .catch((err: Error) => console.log(err))
  }

  const handleDeleteRoom =(id: string): void => {
    deleteRoom(id).then(({status, data}) => {
      if(status !== 200){ 
        throw new Error('Error! Room not deleted');
      }
      setRooms(data.rooms)
    })
    .catch((err) => console.log(err))
  }

  const handleSaveBooking = (e: React.FormEvent, formData: IBooking): void => {
    e.preventDefault()
    addTodo(formData)
    .then(({ status, data }) => {
     if (status !== 201) {
       throw new Error('Error! Todo not saved')
     }
     setTodos(data.todos)
   })
   .catch((err) => console.log(err))
 }

  return(
    <Container fluid>
      <Row>
        <main className='App'>
          <h1>Rooms</h1>
          {rooms?.map((room: IRoom) => (
            <RoomCard
            key={room.id}
            deleteRoom={handleDeleteRoom}
            room={room}
            ></RoomCard>
          ))}
        </main>
        <AddBooking addBooking={}></AddBooking>
      </Row>
    </Container>
  )
}
export default App;
