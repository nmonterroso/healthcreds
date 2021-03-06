import React from 'react'
import styled from 'styled-components'
import Points from './Points'
import Spend from './Spend'
import Earn from './Earn'

const ActionItems = styled.div`
  margin: 1rem;
  padding: 0;
  
  > * {
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const ActionList = () => (
  <ActionItems>
    <Points />
    <Earn />
    <Spend />
  </ActionItems>
)

export default ActionList
