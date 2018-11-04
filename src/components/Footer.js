import React from 'react'
import styled from 'react-emotion'
import { LinkItem } from './Text'
import Ribbon from './Ribbon'
import Space from './Space'
import Link from './Link'

const Half = styled.div`
  ${tw`flex`};
`

const Contact = () => (
  <Ribbon dark>
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
  </Ribbon>
)

export default Contact