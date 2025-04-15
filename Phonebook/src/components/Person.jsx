const Person = ({ person }) => {
    return(
        <div>
                {person.name}
                <strong> {person.number}</strong>
        </div>
    )
}
export default Person