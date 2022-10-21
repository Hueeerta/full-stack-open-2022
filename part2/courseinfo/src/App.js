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

const Course = ({ course }) => {
  return (
    <section className="app-course">
      <Header name={course.name} />
      <Content parts={course.parts} />
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
    ],
  };

  return <Course course={course} />;
};

export default App;
