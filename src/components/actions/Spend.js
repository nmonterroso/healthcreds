import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import BurgerAndFriesIcon from './BurgerAndFriesIcon'
import IceCreamIcon from './IceCreamIcon'
import { userShape } from '../../reducers/user'

const stateToProps = state => ({ user: state.user })
const mergeProps = stateProps => ({ costs: stateProps.user.costs })
const options = {
  areStatesEqual: (prev, next) => _.isEqual(prev.costs, next.costs),
}

const Container = styled.div`
  display: flex;
`

const Button = styled(RaisedButton)`
  flex-grow: 1;
  
  button > div > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const raisedButtonStyle = {
  height: '5rem',
}

class Spend extends React.Component {
  static propTypes = {
    costs: userShape.costs,
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
          style={raisedButtonStyle}
        />
        <Button
          icon={<IceCreamIcon />}
          onTouchTap={this.onSnackSpend}
          style={raisedButtonStyle}
        />
      </Container>
    )
  }
}

export default connect(stateToProps, null, mergeProps, options)(Spend)
