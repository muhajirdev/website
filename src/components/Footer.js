import React from 'react'
import { LinkItem } from './Text'
import Ribbon from './Ribbon'
import Space from './Space'
import Link from './Link'

import Contact from './contact'

const Footer = () => (
  <>
  <Contact/>
  <Ribbon>
    <div css={{ display: 'flex', justifyContent: 'space-between' }}>
      <div css={{ display: 'flex' }}>
        <Link to="https://github.com/muhajirdev">
          <LinkItem>GITHUB</LinkItem>
        </Link>
        <Space horizontal />
        <Link to="https://twitter.com/muhajirdev">
          <LinkItem>TWITTER</LinkItem>
        </Link>
      </div>
    </div>
  </Ribbon>
  </>
)

export default Footer
