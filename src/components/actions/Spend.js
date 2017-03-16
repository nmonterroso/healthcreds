import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import { connect } from 'react-redux'
import BurgerAndFriesIcon from './BurgerAndFriesIcon'
import IceCreamIcon from './IceCreamIcon'
import * as styles from './styles'

const stateToProps = state => ({ points: state.points })
const mergeProps = stateProps => ({ costs: stateProps.points.costs })
const options = {
  areStatesEqual: (prev, next) => _.isEqual(prev.costs, next.costs),
}

const Container = styled.div`
  display: flex;
`

const Button = styled(styles.IconButton)`
  flex-grow: 1;
`

class Spend extends React.Component {
  static propTypes = {
    costs: React.PropTypes.shape({
      full: React.PropTypes.number,
      snack: React.PropTypes.number,
    }),
  }

  onFullSpend = () => {
    console.log(`spending ${this.props.costs.full}`)
  }

  onSnackSpend = () => {
    console.log(`spending ${this.props.costs.snack}`)
  }

  render() {
    return (
      <Container>
        <Button
          icon={<BurgerAndFriesIcon />}
          onTouchTap={this.onFullSpend}
          style={styles.raisedButtonStyle}
        />
        <Button
          icon={<IceCreamIcon />}
          onTouchTap={this.onSnackSpend}
          style={styles.raisedButtonStyle}
        />
      </Container>
    )
  }
}

export default connect(stateToProps, null, mergeProps, options)(Spend)
