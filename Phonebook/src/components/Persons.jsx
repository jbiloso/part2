import Person from './Person'
const Persons = ({ visiblePersons }) => {
    return (
        <div>
            <ol>
                {visiblePersons.map(person => <Person key={person.name} person={person}></Person>)}
            </ol>
        </div>
    )
}
export default Persons