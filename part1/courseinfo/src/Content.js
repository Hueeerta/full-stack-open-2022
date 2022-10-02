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
        partName={props.parts[0].name}
        exercises={props.parts[0].exercises}
      />
      <Part
        partName={props.parts[1].name}
        exercises={props.parts[1].exercises}
      />
      <Part
        partName={props.parts[2].name}
        exercises={props.parts[2].exercises}
      />
    </>
  );
};
export default Content;
