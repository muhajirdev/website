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
const StyledLink = styled(Link)`
  ${tw`no-underline text-inherit`};
`

const LogoBig = ({ title }) => <Title className={hideOnSmall}>{title}</Title>
const LogoSmall = ({ title }) => <Title className={hideOnBig}>{title[0]}</Title>

const Header = ({ siteTitle }) => (
  <Container>
    <div>
      <StyledLink to="/">
        <LogoSmall title={siteTitle} />
        <LogoBig title={siteTitle} />
      </StyledLink>
    </div>
    <Items>
      <StyledLink to="/writing">
        <Item>WRITING</Item>
      </StyledLink>
      <StyledLink to="/reading">
        <Item>READING</Item>
      </StyledLink>
      <StyledLink to="/#open-source">
        <Item>WORK</Item>
      </StyledLink>
      <StyledLink to="https://github.com/muhajirframe">
        <Item>GITHUB</Item>
      </StyledLink>
    </Items>
  </Container>
)

export default Header
