import Weather from './Weather'
const Country = ({ country }) => {
    // the .languages of the country is an object with unknown keys 
    // console.log(visibleCountries[0].languages)
    // console.log(Object.values(visibleCountries[0].languages))

    //getting the values of the object languages when we do not know the keys
    const languages = Object.values(country.languages)

    //we return the capital, area, languages, and the map
    return (
        <div>
            <div>
            <h1>{country.name.official}</h1>
            </div>
            <div>{`Capital: ${country.capital}`}</div>
            <div>{`Area: ${country.area}`}</div>
            <div>
            <h2>Languages</h2>
            </div>
            <div>
            {languages.map(lang => <li key={lang}>{lang}</li>)}
            </div>
            <div>
            <img src ={country.flags.png} ></img>
            </div>

            <Weather country={country}></Weather>
        </div>
    )
}
export default Country