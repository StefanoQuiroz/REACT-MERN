import PersonCard from './components/PersonCard'
import './scss/App.scss';

//Otra manera, trabajando con DB
const persons = [
  {firstName: "Joe", lastName:"Doe", Age:45, hairColor:"Black"},
  {firstName: "John", lastName:"Smith", Age:88, hairColor:"Brown"},
  {firstName: "Millard", lastName:"Fillmore", Age:50, hairColor:"Brown"},
  {firstName: "Maria", lastName:"Smith", Age:62, hairColor:"Brown"}
];

function App() {
  // const manera1 = persons.map( (data, key) => {
  //   const {firstName, lastName, age, hairColor} = data;
  //   console.log({data, key}) 
  //   return(
  //     <PersonCard
  //       firstName = {firstName}
  //       lastName = {lastName}
  //       age = {age}
  //       hairColor = {hairColor}
  //       key = {key}
  //     />
  //   )
  // });   
  return (
    <div className="App">
      <form  className="event-form">
        <input type="text" placeholder="correo"/>
        <input type="password" placeholder="contraseña"/>
        {/* para evitar que js haga un refreshment a la página */}
        {/* e.target.innerText ="You clicked" cambia de login a Youclicked el button */}
        <button onClick={(e) => {e.preventDefault(); e.target.innerText = "You clicked"; console.log({event: e})}}>Login</button>
        {/* <button onclick={(event) => console.log(event)}>Login</button> */}
      </form>


      {/* <PersonCard  firstName={"Joe"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <PersonCard  firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      <PersonCard  firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
      <PersonCard  firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}/> */}
      {/* {manera1} */}
      {persons.map((p, i) => <PersonCard {...p} key={i}/>)}
    </div>
  );
}

export default App;
