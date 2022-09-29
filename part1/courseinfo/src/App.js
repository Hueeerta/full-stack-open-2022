import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

const App = () => {
  const course = {}
  course.title = 'Half Stack application development'
  course.part = [
    {"name":'Fundamentals of React',"exercises":10},
    {"name":'Using props to pass data',"exercises":7},
    {"name":'State of a component',"exercises":14},
  ]

  return(
    <div className="app">
      <Header title={course.title} />
      <Content parts={course.part} />
      <Total totalExercises={course.part} />
    </div>
  )
}
export default App;