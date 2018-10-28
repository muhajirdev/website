import React from 'react'
import styled from 'react-emotion'
import Link from './Link'
import { Meta } from './Text'

const Name = styled.div`
  ${tw`font-bold text-grey-darkest py-2 text-2xl`};
`

const Container = styled.div`
  ${tw`py-4`};
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
