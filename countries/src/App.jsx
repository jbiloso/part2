import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => { 
  const [ countries, setCountries] = useState(null)
  
  const [ visibleCountries, setVisibleCountries] = useState(null)
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
    const localSearchName = event.target.value 
    console.log(`Searching '${event.target.value}'`)
    setSearchName(event.target.value)

    let countriesSearched = []

    if(localSearchName === ''){ //do not return anything if nothing is being searched
      setVisibleCountries(null) //visibleCountries will be used in conditional rendering
    }else{
      //count the countries that is being searched 
      countriesSearched = countries.
        filter(country => country.name.common.toLowerCase().includes(localSearchName.toLowerCase()))
      setVisibleCountries(countriesSearched)
    }
    // console.log('countriesSearched.length : ',countriesSearched.length)
  } 

  if(!visibleCountries){ //if there's no country being searched, or none matches the search
    return ( 
      <div>
        <>find countries </>
        <input type='text' onChange={(event)=> handleSearchChange(event)} placeholder='Search...'></input>
      </div>
    )
  }  
  if(visibleCountries.length > 10){ //say specify the search
    return (
      <div>
        <>find countries </>
        <input type='text' onChange={(event)=> handleSearchChange(event)} placeholder='Search...'></input>
        <div>Too many matches, specify another filter</div>
      </div>
    )
  }
  if(visibleCountries.length <= 10 && visibleCountries.length != 1){ //if 2-10 countries match the search, return their names
    return (
      <div>
        <>find countries </>
        <input type='text' onChange={(event)=> handleSearchChange(event)} placeholder='Search...'></input>
        {visibleCountries.map(country => <div key={country.name.official}>{country.name.common}</div>)}
      </div>
    )
  }
  if(visibleCountries.length == 1){ //if only one country matches the search, return the info
    return(
      <div>
        <>find countries </>
        <input type='text' onChange={(event)=> handleSearchChange(event)} placeholder='Search...'></input>
        <Country country={visibleCountries[0]}></Country>
      </div>
    )
  }
}
export default App