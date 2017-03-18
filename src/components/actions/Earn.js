import React from 'react'
import styled from 'styled-components'
import Run from 'material-ui/svg-icons/maps/directions-run'
import * as styles from './styles'

const Button = styled(styles.IconButton)`
  width: 100%;
`

class Earn extends React.Component {
  onEarn = () => {
    console.log('earning a workout cred')
  }

  render() {
    return (
      <Button
        icon={<Run style={styles.svgStyle} />}
        onTouchTap={this.onEarn}
        style={styles.raisedButtonStyle}
      />
    )
  }
}

export default Earn
