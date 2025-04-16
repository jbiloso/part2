import { useState } from 'react' 
import axios from 'axios'


const FormAdd = ({ persons , setPersons , visiblePersons, setVisiblePersons, searchName}) => {
    
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
        //create contact object
        const personObject = {
          // id: persons.length+1,
          name: newName,
          number: newNumber
        }

        //use axios method 
        axios
          .post('http://localhost:3001/persons', personObject)
          .then(response => {
            console.log(response.data)
            const currentPersons = persons.concat(response.data)
            setPersons(currentPersons)
            setVisiblePersons(currentPersons.filter((person)=> person.name.toLowerCase().includes(searchName.toLowerCase())))
          })



        // list of names
        const names = persons.map(person => person.name)
        // console.log(names.includes(personObject.name))
        if (!names.includes(personObject.name)){
            setPersons(persons.concat(personObject)) //add contact
            const localPersons = ([...persons, personObject])
            setVisiblePersons(localPersons.filter((person)=> person.name.toLowerCase().includes(searchName.toLowerCase())))
            // console.log('perons ',persons)
            // console.log(personObject.name)
        }else{
          {alert(`${personObject.name} is already added to phonebook`)} //show alert
        }
        setNewName('')
        setNewNumber('')
      }
    return (
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
    )
}

export default FormAdd