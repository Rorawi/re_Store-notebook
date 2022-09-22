import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../action/userAction';
import { v4 as uuid } from "uuid"
import { Icon } from '@iconify/react';

const EditNotes = (props) => {

    const [title, setTitle] = useState( props.prefill.title);
    const [date, setDate] = useState( props.prefill.date);
    const [text, setText] = useState( props.prefill.text);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        //  console.log(newUser);
        setTitle("");
        setDate("");
        setText("");
        dispatch(editUser({ id: props.prefill.id, title, date, text }));
        props.closeModal();
    }
    
        return (
            <div>
            <form action="form" className='edit-form'>
            <div className="edit-input-group">
               <input className='edit-input' type="text" name="title" id="title" value={title} onChange={(e) =>{
                       setTitle(e.target.value);
                   }}/>
            <label htmlFor="Notes title" className='edit-placeholder'>NOTES TITLE</label>
            </div>

              <div className="edit-input-group">
                
              <input className='edit-input' type="text" name="title" id="title" value={date} onChange={(e) =>{
                       setDate(e.target.value);
                   }}/>
                   <label htmlFor="Notes title" className='edit-placeholder'>Date Recorded</label>
              </div>

             
              <div className="edit-input-group">
              <textarea className='edit-input' type="text" name="title" id="title"  value={text} onChange={(e) =>{
                       setText(e.target.value);
                   }}></textarea>
                     <label htmlFor="Notes title" className='edit-placeholder'>Note Text</label>
              </div>
              <div className="submit-btn">
                <button onClick={handleSubmit}>Submit<Icon icon="radix-icons:check" height={20} /></button>
              </div>
            </form>
       </div>
       
        );
    }



export default EditNotes;
