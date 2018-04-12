const Message = props => (
  <h1>
    {props.greeting}, {props.name}
  </h1>
)

render(<Message greeting="Hello" name="John" />)
