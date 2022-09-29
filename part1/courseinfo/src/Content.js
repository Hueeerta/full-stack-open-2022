const Part = (props) => {
  return (<p>{props.partName} {props.exercises}</p>)
}

const Content = (props) => {
  return (
    <>
      <Part partName={props.part1name} exercises={props.part1exercises} />
      <Part partName={props.part2name} exercises={props.part2exercises} />
      <Part partName={props.part3name} exercises={props.part3exercises} />
    </>
  )
}
export default Content