const Content = (props) => {

  const displayContent = () => {
    let elements = [];
    for (let index = 0; index < props.parts.length; index++) {
      elements[index] = <p>{props.parts[index].name} {props.parts[index].exercises}</p>;
    }
    return elements
  }

  return displayContent()

}
export default Content