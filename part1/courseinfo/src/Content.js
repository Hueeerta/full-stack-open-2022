const Part = (props) => {
  return (
    <p>
      {props.partName} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part
        partName={props.course.parts[0].name}
        exercises={props.course.parts[0].exercises}
      />
      <Part
        partName={props.course.parts[1].name}
        exercises={props.course.parts[1].exercises}
      />
      <Part
        partName={props.course.parts[2].name}
        exercises={props.course.parts[2].exercises}
      />
    </>
  );
};
export default Content;
