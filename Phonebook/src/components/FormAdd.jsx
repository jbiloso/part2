import { useState } from 'react' 

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
        // console.log('im submitting')
        // console.log(persons[0].name)
        const personObject = {
          id: persons.length+1,
          name: newName,
          number: newNumber
        }
        // setPersons([...persons, personObject])
        // console.log([...persons, personObject])


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