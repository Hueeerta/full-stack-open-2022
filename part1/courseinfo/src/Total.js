const Total = (props) => {
  let total = 0
  for (let index = 0; index < props.totalExercises.length; index++) {
    total += props.totalExercises[index].exercises;
  }

  return (
    <p>Total number of exercises: {total}</p>
  )
}
export default Total