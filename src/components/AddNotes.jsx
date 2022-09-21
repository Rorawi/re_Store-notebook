import React from 'react';
import { connect } from 'react-redux';
 import {addUser} from "../action/userAction";
import { useState } from 'react';
import {v4 as uuid } from "uuid"
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
                    }}></textarea><br/><br/>
                <button onClick={handleSubmit}>Submit</button>
             </form>
        </div>
    );
}

const mapDispatch ={
    addUser
}

export default connect(null, mapDispatch)(AddNotes);
