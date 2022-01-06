import './App.css';
import Person from './Person';
import { data } from './data';
import { useState } from 'react';

function App() {
  const [person, setPerson] = useState(data);

  const removePerson = (id) => {
    console.log('person', id);
    setPerson((prevPersons) => {
      return [...prevPersons.filter((iPerson) => iPerson.id !== id)];
    });
  };

  return (
    <section className='container'>
      {person.map((iPerson) => {
        return (
          <Person
            key={iPerson.id}
            {...iPerson}
            removeClicked={removePerson}
          ></Person>
        );
      })}
      {/* <button className='btn'>Add Person</button> */}
    </section>
  );
}

export default App;
