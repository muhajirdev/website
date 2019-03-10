import React from 'react'
import styled from 'react-emotion'
import Link from './Link'
import { Meta } from './Text'

const Name = styled('div')`
  ${tw`font-bold text-grey-darkest py-2 text-2xl`};
`

const Container = styled('div')`
  ${tw`py-4`};
  > div {
    ::after {
      content: '→';
      transition: all 250ms ease-in-out;
      opacity: 0;
      ${tw`font-thin text-grey pl-6`};
    }
  }
  :hover {
    > div {
      ::after {
        opacity: 1;
        ${tw`pl-8`};
      }
    }
  }
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
