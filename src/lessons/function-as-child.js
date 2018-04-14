class Container extends Component {
  render() {
    return this.props.children({ message: "Function as child" })
  }
}

render(<Container>{props => <h1>{props.message}</h1>}</Container>)
