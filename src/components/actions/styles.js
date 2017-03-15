import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton'

export const raisedButtonStyle = {
  height: '5rem',
}

export const IconButton = styled(RaisedButton)`
  button > div > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
