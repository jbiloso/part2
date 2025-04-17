import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => { 
  const [ countries, setCountries] = useState(null)
  const [ searchName, setSearchName] = useState('')

  useEffect(() => {
    // console.log('effect run, countries are now ', countries) 
    console.log('effect runs') 

    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleSearchChange = (event) => {
    console.log(`Searching '${event.target.value}'`)
    setSearchName(event.target.value)
  }
  if(countries){
    return (
      <div>
        <>find countries </>
        <input type='text' onChange={(event)=> handleSearchChange(event)} placeholder='Search...'></input>
        {countries
          .filter(country => country.name.common.toLowerCase().includes(searchName.toLowerCase()))
          .map(country => (
            <div key={country.name.official}>{country.name.common}</div>
          ))}
      </div>
    )
  }
  return null

}
export default App