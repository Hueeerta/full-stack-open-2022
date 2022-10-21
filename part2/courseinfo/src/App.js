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

const Total = ({ parts }) => {
  const total = parts.reduce(
    (accumulator, currentItem) => accumulator + currentItem.exercises,
    0
  );
  return <h4 className="app-course-total">total of {total} exercises</h4>;
};

const Courses = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <section key={course.id} id={course.id} className="app-course">
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
          <hr />
        </section>
      ))}
    </>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      <h1>Web development curriculum</h1>
      <Courses courses={courses} />
    </>
  );
};

export default App;
