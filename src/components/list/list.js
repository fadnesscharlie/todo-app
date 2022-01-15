import { Card, Elevation } from '@blueprintjs/core';

export default function list(props) {
  return(
    <>
    {props.setting.list.map((item) => (
      <Card interactive={true} elevation={Elevation.FOUR} key={item.id}>
        <p>{item.text}</p>
        <p>
          <small>Assigned to: {item.assignee}</small>
        </p>
        <p>
          <small>Difficulty: {item.difficulty}</small>
        </p>
        <div onClick={() => props.toggleComplete(item.id)}>
          Complete: {item.complete.toString()}
        </div>
        <hr />
      </Card>
    ))}
    </>
  )
}
