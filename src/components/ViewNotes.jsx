import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../action/userAction';
import { v4 as uuid } from "uuid"

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
                 <form action="form">
                 <br/><br/>
                    <label htmlFor="Notes title">NOTES TITLE</label>
                    <input type="text" name="title" id="title"  placeholder="title here" value={title} onChange={(e) =>{
                            setTitle(e.target.value);
                        }}/><br/><br/>
    
                    <label htmlFor="Notes title">Date Recorded</label>
                    <input type="text" name="title" id="title"  placeholder="title here" value={date} onChange={(e) =>{
                            setDate(e.target.value);
                        }}/><br/><br/>
    
                    <label htmlFor="Notes title">Note Text</label>
                    <textarea type="text" name="title" id="title"  placeholder="title here" value={text} onChange={(e) =>{
                            setText(e.target.value);
                        }}></textarea>
                 </form>
            </div>
        );
    }



export default EditNotes;
