import Header from "./Header.js";
import Content from "./Content.js";
import Total from "./Total.js";

const App = () => {
  const course = "Half Stack application development";
  const part = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div className="app">
      <Header course={course} />
      <Content parts={part} />
      <Total parts={part} />
    </div>
  );
};
export default App;
