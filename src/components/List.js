import React from 'react'
import styled from 'react-emotion'
import Link from './Link'

const Name = styled.div`
  ${tw`font-bold text-grey-darkest py-2 mb-8 text-2xl`};
`

const Meta = styled.span`
  ${tw`text-grey text-xs`};
`

const List = ({ to, name, meta }) => 
  (
    <Link to={to}>
      <Name>{name}</Name>
      <Meta>{meta}</Meta>
    </Link>
  )


export default List
