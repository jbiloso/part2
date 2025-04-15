import { useState } from 'react' 

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number:'39-44-3225225'},
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523'},
    { id: 3, name: 'Dan Abramov', number:'12-43-234345'},
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122'},
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [visiblePersons, setVisiblePersons] = useState(persons)


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    //trim method will remove the whitespace from both ends of the string
    const searchName = event.target.value.trim()
    // setNewSearch(searchName)
    // console.log('event.target.value is *', searchName,'*')
    // console.log('persons that should be visible are ', persons.filter((person)=> person.name.includes(searchName) ))
    setVisiblePersons(persons.filter((person)=> person.name.toLowerCase().includes(searchName.toLowerCase())))
    // console.log('current value of newSearch is ', newSearch)
    //as you can see here, when calling the setVisiblePersons, 
    // we are not using the value of the newSearch which has a state, 
    // because the state is updated asynchronously or late ,
    // for real time update, we use the event.target.value
    // but it is still necesarry to keep 

    //note that the input for search , i didnt assign value to it 
    //because it's late update will never be useful
    //instead, every onChange called, i just get the value of it directly
    // from the event.target.value
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
      <div>Search
        <input onChange={handleSearchChange}></input>
      </div>
      <h2>Add New</h2>
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
        {visiblePersons.map(person => <div key={person.name}>
          {person.name}
          <strong> {person.number}</strong>
        </div>)}
      </ol>
    </div>
  )
}
export default App