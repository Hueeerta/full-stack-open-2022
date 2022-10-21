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

export default Courses;
