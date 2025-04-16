import { useState, useEffect } from 'react'
import axios from 'axios' 
import Persons from './components/Persons'
import FormAdd from './components/FormAdd'
import SearchFilter from './components/SearchFilter'

import personService from './services/persons'

const App = () => {
  // const [persons, setPersons] = useState([
  //   { id: 1, name: 'Arto Hellas', number:'39-44-3225225'},
  //   { id: 2, name: 'Ada Lovelace', number: '39-44-5323523'},
  //   { id: 3, name: 'Dan Abramov', number:'12-43-234345'},
  //   { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122'},
  // ])
  const [persons, setPersons] = useState([])

  const [visiblePersons, setVisiblePersons] = useState(persons)
  const [searchName , setSearchName ] = useState('')

  const hook = () => {
    console.log('effect')
    personService
      .getAll()
      .then(returnedPersons =>{
        // console.log('initial persons ',returnedPersons)
        setPersons(returnedPersons)
        setVisiblePersons(returnedPersons.filter(p => p.name.toLowerCase().includes(searchName.toLowerCase())))
      })
  }
  useEffect(hook, [])
  // console.log('render',persons.length, 'persons')
  return(
    <div>
      <h2>Phonebook</h2>
      <SearchFilter 
        persons={persons} 
        visiblePersons={visiblePersons} 
        setVisiblePersons={setVisiblePersons} 
        searchName={searchName} 
        setSearchName={setSearchName}
      ></SearchFilter>

      <h3>Add New</h3>
      <FormAdd 
        persons={persons} 
        setPersons={setPersons} 
        visiblePersons={visiblePersons} 
        setVisiblePersons={setVisiblePersons} 
        searchName={searchName}> 
      </FormAdd>

      <h3>Numbers</h3>
      <Persons 
        visiblePersons={visiblePersons}
      ></Persons>
    </div>
  )
}
export default App