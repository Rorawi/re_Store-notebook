import React from 'react';
import NoteBook from "./NoteBook";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux"

const SeeAllNotes = (props) => {
    return (
        <div>
            <Container>
                <Row>        
                {props.data.map((data,index) => {
                        return (
                            <NoteBook data={data}
                                  key={data.id}/>
                        )
                    })}
                </Row>
            </Container>
        </div>
        )
    }

const mapState =(state)=>({
    data:state.datas
})

export default connect(mapState)(SeeAllNotes);

