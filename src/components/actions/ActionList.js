import React from 'react'
import styled from 'styled-components'
import Spend from './Spend'

const ActionUnorderedList = styled.ul`
  list-style-type: none;
  margin: 1rem;
  padding: 0;
  li {
    margin-bottom: 1rem;
    border-radius: .7rem;
    padding: 0;
  }
`

const ActionList = () => (
  <ActionUnorderedList>
    <li>
      <Spend />
    </li>
  </ActionUnorderedList>
)

export default ActionList
