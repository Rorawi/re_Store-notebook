import React from 'react';
import { connect } from 'react-redux';
 import {addUser} from "../action/userAction";
import { useState } from 'react';
import {v4 as uuid } from "uuid"
import { Icon } from '@iconify/react';
// import { Form,Button } from "react-bootstrap"

const AddNotes = (props) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [text, setText] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
     let newUser = {  title,  date,  text, id: uuid() };
     props.addUser(newUser);
    //  console.log(newUser);
    setTitle("");
    setDate("");
    setText("")
    
}

    return (
        <div>
             <form action="form" className='form'>
             <div className="input-group">
                <input className='input' type="text" name="title" id="title" value={title} onChange={(e) =>{
                        setTitle(e.target.value);
                    }}/>
             <label htmlFor="Notes title" className='placeholder'>NOTES TITLE</label>
             </div>

               <div className="input-group">
                 
               <input className='input' type="text" name="title" id="title" value={date} onChange={(e) =>{
                        setDate(e.target.value);
                    }}/>
                    <label htmlFor="Notes title" className='placeholder'>Date Recorded</label>
               </div>

              
               <div className="input-group">
               <textarea className='input' type="text" name="title" id="title"  value={text} onChange={(e) =>{
                        setText(e.target.value);
                    }}></textarea>
                      <label htmlFor="Notes title" className='placeholder'>Note Text</label>
               </div>
               <div className="submit-btn">
                 <button onClick={handleSubmit}>Submit<Icon icon="radix-icons:check" height={20} /></button>
               </div>
             </form>
        </div>
        
    );
}

const mapDispatch ={
    addUser
}

export default connect(null, mapDispatch)(AddNotes);
