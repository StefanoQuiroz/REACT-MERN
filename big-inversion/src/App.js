import React from 'react';
import './scss/styles.scss';
import PersonCard from './components/PersonCard';
const persons = [
  {firstName: "Jane", lastName:"Doe", age:45, hairColor: "Black"},
  {firstName: "John", lastName:"Smith", age:88, hairColor: "Brown"},
  {firstName: "Millard", lastName:"Filmore", age:50, hairColor: "Brown"},
  {firstName: "Maria", lastName:"Smith", age:62, hairColor: "Brown"}
];

function App() {
  return (
    <div className="App">
      {persons.map((p, i) => {
        console.log({key: i})
        return <PersonCard {...p}/>; 
      })}
    </div>
  );
}

export default App;
