
import './App.css';

import Input from './Components/Input/Input';
import List from './Components/List/List';
import FooterMenu from './Components/Menu/FooterMenu';
import { useState } from 'react';


function App() {
	const [notes, setNotes] = useState([]);

	function addNote(note) {
		setNotes((prevNotes) => {
			return [...prevNotes, note];
		});
	}

	function deleteNote(id){
		setNotes((prevNotes) => {
			return prevNotes.filter((note, index) => {
				return index !== id;
			});
		});
	}
	

  return (
    <div className="App">
      <section className="todoapp">
		<header className="header">
			<h1>todos</h1>
			<Input onAdd={addNote} />
		</header>
			{notes.map((note, index) => {
				return (
					<List
						key={index}
						id={index}
						note={note.text}
						onDelete={deleteNote}
					/>
				);
			})}
	</section>
			<FooterMenu />
    </div>
  );
}

export default App;
