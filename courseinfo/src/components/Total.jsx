const Total = ({ parts }) => {
    const exercises = parts.map(part => part.exercises)
    const total = exercises.reduce((total, exercise) => total + exercise, 0)
    return (
        <div>
            <strong>total of {total} exercises</strong>
        </div>
    )
}
export default Total