const StyledButton = styled.button`
  font-size: 17px;
  font-family: "Avenir", sans-serif;
  font-weight: bold;
  padding: 0.5rem;
  border: 0.5rem solid #663399;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background: #ffeeee;
    border-color: #885599;
  }
`

render(<StyledButton>Click me!</StyledButton>)
