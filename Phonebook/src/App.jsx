import { useState } from 'react' 

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number:'39-44-3225225'}
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addContact = () => {
    event.preventDefault()
    const personObject = {
      id: persons.length+1,
      name: newName,
      number: newNumber
    }
    // list of names
    const names = persons.map(person => person.name)
    // console.log(names.includes(personObject.name))
    if (!names.includes(personObject.name)){
      setPersons(persons.concat(personObject)) //add contact
    }else{
      {alert(`${personObject.name} is already added to phonebook`)} //show alert
    }
    setNewName('')
    setNewNumber('')
  }

  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {/* <div>debug: {newName}</div> */}
      <h2>Numbers</h2>
      <ol>
        {persons.map(person => <div key={person.name}>
          {person.name}
          <strong> {person.number}</strong>
        </div>)}
      </ol>
    </div>
  )
}
export default App