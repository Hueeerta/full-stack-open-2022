import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div className="app">
      <Header title={course} />
      <Content part1name={part1} part2name={part2} part3name={part3} part1exercises={exercises1} part2exercises={exercises2} part3exercises={exercises3} />
      <Total totalExercises={exercises1+exercises2+exercises3} />
    </div>
  )
}
export default App;