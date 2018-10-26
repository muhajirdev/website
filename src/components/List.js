import React from 'react'
import styled from 'react-emotion'
import Link from './Link'

const Name = styled.div`
  ${tw`font-bold text-grey-darkest py-2 text-2xl`};
`

const Container = styled.div`
  ${tw`py-4`};
`

const Meta = styled.span`
  ${tw`text-grey text-xs`};
`

const List = ({ to, name, meta }) => (
  <Link to={to}>
    <Container>
      <Name>{name}</Name>
      <Meta>{meta}</Meta>
    </Container>
  </Link>
)

export default List
