import  React from "react";
import { Button, Card, Col } from "react-bootstrap";

type Props = RoomProps & {
    deleteRoom: (id:string) => void
};

const RoomCard: React.FC<Props> = ({room, deleteRoom})=> {
    return (
        <Col>
        <Card style={{ width: '100%'}}>
            <Card.Body>
                <Card.Title>
                    {room.name}
                </Card.Title>
                <Button variant="primary" onClick={() => deleteRoom(room.id)}>Delete</Button>
            </Card.Body>
        </Card>
        </Col>
  
    )
}

export default RoomCard