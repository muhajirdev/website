import React from 'react'
import styled from 'react-emotion'
import Link from './Link'

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
  ${tw`text-grey-darkest text-base m-0 hidden md:block`};
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-inherit`};
`

const Header = ({ siteTitle }) => (
  <Container>
    <div>
      <StyledLink to="/">
        <Title>{siteTitle}</Title>
      </StyledLink>
    </div>
    <Items>
      <StyledLink to="/writing">
        <Item>WRITING</Item>
      </StyledLink>
      <StyledLink to="/reading">
        <Item>READING</Item>
      </StyledLink>
      <StyledLink to="/works">
        <Item>WORKS</Item>
      </StyledLink>
      <StyledLink to="https://github.com/muhajirframe">
        <Item>GITHUB</Item>
      </StyledLink>
    </Items>
  </Container>
)

export default Header
