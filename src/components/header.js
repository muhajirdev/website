import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`bg-grey-lightest px-32 py-8 flex justify-between`};
`
const Items = styled.div`
  ${tw`flex`};
`
const Item = styled.h3`
  ${tw`text-grey-darkest ml-4 text-xl mb-0`};
`
const Title = styled.h1`
  ${tw`text-grey-darkest text-xl m-0`};
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
      <StyledLink to="/blog">
        <Item>Blog</Item>
      </StyledLink>
      <StyledLink to="/projects">
        <Item>Projects</Item>
      </StyledLink>
    </Items>
  </Container>
)

export default Header
