import './header.css'

export default function header(props) {
  return (
    <header>
      <h1>Welcome to Charlie's ToDo App!</h1>
    
				<h2>To Do List: {props.setting.incomplete} items pending</h2>
			</header>
  )
}
