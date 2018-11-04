import React from 'react'
import styled, { css } from 'react-emotion'
import Link from './Link'

const hideOnSmall = css`
  ${tw`hidden lg:block`};
`
const hideOnBig = css`
  ${tw`block lg:hidden`};
`

const Container = styled.div`
  ${tw`px-4 md:px-16 py-6 flex justify-between`};
`
const Items = styled.div`
  ${tw`flex items-center`};
`
const Item = styled.h3`
  ${tw`text-grey-darkest ml-4 sm:ml-8 text-xs mb-0`};
`
const Title = styled.h1`
  ${tw`text-grey-darkest text-base m-0`};
`
const LogoBig = ({ title }) => <Title className={hideOnSmall}>{title}</Title>
const LogoSmall = ({ title }) => <Title className={hideOnBig}>{title[0]}</Title>

const Header = ({ siteTitle }) => (
  <Container>
    <div>
      <Link to="/">
        <LogoSmall title={siteTitle} />
        <LogoBig title={siteTitle} />
      </Link>
    </div>
    <Items>
      <Link to="/writing">
        <Item>WRITING</Item>
      </Link>
      <Link to="/reading">
        <Item>READING</Item>
      </Link>
      <Link to="/">
        <Item>WORK</Item>
      </Link>
      <Link to="https://github.com/muhajirframe">
        <Item>GITHUB</Item>
      </Link>
    </Items>
  </Container>
)

export default Header
