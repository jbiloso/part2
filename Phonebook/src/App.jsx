import { useState } from 'react' 

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas'}
  ])

  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addContact = () => {
    event.preventDefault()
    const personObject = {
      id: persons.length+1,
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {/* <div>debug: {newName}</div> */}
      <h2>Numbers</h2>
      {/* <ol>
        Persons 
        {persons.map(person => <li key={person.id}>({person.id}){person.name}</li>)}
      </ol> */}
    </div>
  )
}
export default App