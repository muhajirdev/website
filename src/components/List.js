import React from 'react'
import styled from 'react-emotion'
import Link from './Link'
import { Meta } from './Text'

const Name = styled.div`
  ${tw`font-bold text-grey-darkest py-2 text-2xl`};
`

const Container = styled.div`
  ${tw`py-4`};
  ${Name} {
    ::after {
      content: '→';
      transition: all 250ms ease-in-out;
      position: relative;
      opacity: 0;
      left: 0px;
      transform: 'translateX(0%)';
      ${tw`font-thin text-grey`};
    }
  }
  :hover {
    ${Name} {
      ::after {
        opacity: 1;
        left: 30px;
        transform: 'translateX(0%)';
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
