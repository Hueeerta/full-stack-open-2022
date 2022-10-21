const Header = ({ name }) => <h2 className="app-course-header">{name}</h2>;

const Content = ({ parts }) => {
  return (
    <div className="app-course-content">
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
};

const Total = ({parts}) => {
  const total = parts.reduce((accumulator,currentItem) => accumulator + currentItem.exercises,0)
  return <h4 className="app-course-total">total of {total} exercises</h4>
} 

const Course = ({ course }) => {
  return (
    <section className="app-course">
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </section>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
