import React from "react";
import './dash.css';

function AddNote(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="dash note">
            <h1> {props.title} </h1>
            <p> {props.content} </p>
            <button onClick={handleClick} > DELETE </button>
        </div>
    );
}

export default AddNote;