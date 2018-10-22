import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`px-16 py-6 flex justify-between`};
`
const Items = styled.div`
  ${tw`flex items-center`};
`
const Item = styled.h3`
  ${tw`text-grey-darkest ml-8 text-xs mb-0`};
`
const Title = styled.h1`
  ${tw`text-grey-darkest text-base m-0`};
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
      <StyledLink to="/reading">
        <Item>WRITING</Item>
      </StyledLink>
      <StyledLink to="/blog">
        <Item>READING</Item>
      </StyledLink>
      <StyledLink to="/projects">
        <Item>WORKS</Item>
      </StyledLink>
      <StyledLink to="/projects">
        <Item>GITHUB</Item>
      </StyledLink>
    </Items>
  </Container>
)

export default Header
