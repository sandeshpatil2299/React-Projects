import React from 'react';
import {useState} from 'react';
import List from './List';
import data from './data';

function App() 
{
  const [people, setPeople]= useState(data);

  function clearAllRecords()
  { 
    setPeople(() => []);
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}></List>
        <button onClick={clearAllRecords}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
