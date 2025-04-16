import { useState } from 'react' 
import axios from 'axios'
import personService from '../services/persons'



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
        
        personService
          .create(personObject)
          .then(returnedPerson => {
            const updatedPersons = persons.concat(returnedPerson)
            setPersons(updatedPersons)
            // console.log(updatedPersons)
            setVisiblePersons(updatedPersons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase())))
          })
        setNewName('')
        setNewNumber('')

        // // list of names
        // const names = persons.map(person => person.name)
        // // console.log(names.includes(personObject.name))
        // if (!names.includes(personObject.name)){
        //     setPersons(persons.concat(personObject)) //add contact
        //     const localPersons = ([...persons, personObject])
        //     setVisiblePersons(localPersons.filter((person)=> person.name.toLowerCase().includes(searchName.toLowerCase())))
        //     // console.log('perons ',persons)
        //     // console.log(personObject.name)
        // }else{
        //   {alert(`${personObject.name} is already added to phonebook`)} //show alert
        // }

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