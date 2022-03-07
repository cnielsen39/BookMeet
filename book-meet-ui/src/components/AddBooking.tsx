import  React, { useState } from "react";

type Props = {
    addBooking: (e: React.FormEvent, formData: IBooking | any) => void
};

const AddBooking: React.FC<Props> = ({addBooking})=> {
    const [formData, setFormData] = useState<IBooking | {}>()

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value
        })
    }
    return (
        <form className='Form' onSubmit={(e) => addBooking(e, formData)}>
        <div>
          <div>
            <label htmlFor='timeStart'>TimeStart</label>
            <input onChange={handleForm} type='date' id='timeStart' />
          </div>
          <div>
            <label htmlFor='timeStop'>timeStop</label>
            <input onChange={handleForm} type='text' id='timeStop' />
          </div>
        </div>
        <button disabled={formData === undefined ? true: false} >Add Booking</button>
      </form>
  
    )
}

export default AddBooking