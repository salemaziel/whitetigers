
import styled, { css } from 'styled-components'
import '../css/style.css'


const Button = styled.Button = styled.a`
  background: transparent;
  border-radius: 5px;
  border: 2px solid #020024;
  color: #020024;
  margin: 1em 1em;
  padding: 0.25em 1em;
  text-decoration:none;
  text-transform: uppercase;
  &:hover {
    text-decoration:none;
    color: orange;
  }

  ${props => props.primary && css`
    background:#575F73;
    color: #ffffff;
    padding: 0.5em 3em;
    font-weight: 800px;
    &:hover {
      text-decoration:none;
      color: #575F73;
      background:#ffffff;
      font-weight: 800px;


  `}

`

const Container = styled.div`
  text-align: center;
`

export default Button