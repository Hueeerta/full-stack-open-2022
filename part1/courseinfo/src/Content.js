const Content = (props) => {
  return (
    <>
    <p>
        {props.part1Name} {props.part1exercises}
      </p>
      <p>
        {props.part2Name} {props.part2exercises}
      </p>
      <p>
        {props.part3Name} {props.part3exercises}
      </p>
    </>
  )
}
export default Content