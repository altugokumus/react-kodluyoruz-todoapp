import React, { useState} from 'react'

function Input(props) {

    const [note, setNote]= useState({
        text: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setNote((note) => {
            return {
                ...note,
                [ name ]: value
            };
        }); 
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            text: ""
    });

        event.preventDefault();
    }


  return (
    <div>
        <form onSubmit={submitNote} >
			<input
                onChange={handleChange}
                value={note.text}
                name="text"
                className="new-todo"
                placeholder="What needs to be done?"
                 />
		</form>
    </div>
  )
}


export default Input;