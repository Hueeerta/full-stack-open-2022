import Header from "./Header.js";
import Content from "./Content.js";
import Total from "./Total.js";

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div className="app">
      <Header title={course} />
      <Content
        part1name={part1.name}
        part2name={part2.name}
        part3name={part3.name}
        part1exercises={part1.exercises}
        part2exercises={part2.exercises}
        part3exercises={part3.exercises}
      />
      <Total
        totalExercises={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  );
};
export default App;
