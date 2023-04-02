import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Person } from './components/Person'

function App({notes}) {
  const [ persons, setPersons ] = useState([
    { content: "Arto Hellas",      number: "040-123456",    id: 1 },
    { content: "Ada Lovelace",     number: "39-44-5323523", id: 2 },
    { content: "Dan Abramov",      number: "12-43-234345",  id: 3 },
    { content: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]) 
  const [ newName, setNewName ]   = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("");
  const [personsToShow, setPersonsToShow] = useState(persons);

  const handleonSubmit = (e) =>{
    e.preventDefault()
 
      const mostrarNotas = persons.filter((person) => person.content === newName) 
      const mostrarNumero = persons.filter((person) => person.number === newNumber)
      if(mostrarNotas.length === 0 || mostrarNumero.length === 0){
        const nameObject = {
          content: newName,
          number: newNumber
        }
        setPersons(persons.concat(nameObject))
        setPersonsToShow(persons.concat(nameObject))
      }else{
        alert (`${newName} ya está agregado a la agenda telefónica`);
      }
      setNewName("")
      setNewNumber("")
  }
  const handleOnChange = (e) =>{
    
    setNewName(e.target.value)
    console.log(e.target.value)
     
  }

  const handelOnchageNumber = (e) =>{
    setNewNumber(e.target.value)
    console.log(newNumber)
  }
  
  const buscador = (e) =>{
     const search = e.target.value
     setFilter(search)
     setPersonsToShow(
      persons.filter((person)=>person.content.toLowerCase().includes(search))
     )
    
    console.log(e.target.value)
  }


  return (
    <div>
      <div>
 
      buscar: <input value={filter} onChange={buscador}  />

      </div>
      <h2>Phonebook</h2>

      <form onSubmit={handleonSubmit}>
  
        <div>
          name:  <input value={newName} onChange={handleOnChange} />
          
        </div>
        <div>
         
          number: <input value={newNumber} onChange={handelOnchageNumber} />
          
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Contacto</h2>
      <div>
      {personsToShow.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div>
 
    </div>
  )
}

export default App
