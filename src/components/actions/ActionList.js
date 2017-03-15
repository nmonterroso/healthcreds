import React from 'react'
import styled from 'styled-components'
import Spend from './Spend'

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
    <Spend />
  </ActionItems>
)

export default ActionList
