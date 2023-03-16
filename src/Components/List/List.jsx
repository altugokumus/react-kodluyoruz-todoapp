import React, { useState } from 'react'

function List(props) {

   function handleClick() {
    props.onDelete(props.id);
  }

  const [isDone, setIsDone] = useState(false);

  function handleCheck(){
    setIsDone((prevValue) => {
        return !prevValue;
    })
  }

  return (
    <div>
        <section className="main">
		<input className="toggle-all" type="checkbox" />
		<ul className="todo-list">
			<li style={{textDecoration: isDone ? "line-through" : "none"}}> 
				<div className="view">
					<input onClick={handleCheck} className="toggle" type="checkbox" />
					<label>{props.note}</label>
					<button onClick={handleClick} className="destroy"></button>
				</div>
			</li>
		</ul>
	</section>
    </div>
  )
}


export default List;