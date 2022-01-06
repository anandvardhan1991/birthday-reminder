import React from 'react';
import './Person.css';

const Person = ({ id, name, age, dp, removeClicked }) => {
  return (
    <>
      {console.log(removeClicked)}
      <article className='person'>
        <img src={dp} alt='' />
        <h4>{name}</h4>
        <h4>{age} years</h4>
        <button className='btn' onClick={() => removeClicked(id)}>
          Remove Person
        </button>
      </article>
    </>
  );
};

export default Person;
