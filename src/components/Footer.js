import React from 'react'
import styled from 'react-emotion'
import { LinkItem } from './Text'
import Ribbon from './Ribbon'
import Space from './Space'
import Link from './Link'

const Half = styled.div`
  ${tw`flex`};
`
const Container = styled.div`
  ${tw`flex justify-between`};
`
const Contact = () => (
  <Ribbon>
    <Container>
      <Half left>
        <Link to="https://github.com/muhajirframe">
          <LinkItem>GITHUB</LinkItem>
        </Link>
        <Space horizontal />
        <Link to="https://twitter.com/muhajirframe">
          <LinkItem>TWITTER</LinkItem>
        </Link>
      </Half>
      <Half>
        <Link to="/contact">
          <LinkItem>CONTACT</LinkItem>
        </Link>
      </Half>
    </Container>
  </Ribbon>
)

export default Contact
