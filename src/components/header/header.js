export default function header(props) {
  return (
    <header>
				<h1>To Do List: {props.setting.incomplete} items pending</h1>
			</header>
  )
}
