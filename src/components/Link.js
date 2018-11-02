import React from 'react'

import { Link as GatsbyLink } from 'gatsby'
import { isInternalLink } from 'is-internal-link'

import styled from 'react-emotion'

const StyledLink = styled(GatsbyLink)`
  ${tw`no-underline text-black`};
`

const StyledLinkWithAnchor = StyledLink.withComponent('a')

const Link = ({ children, to, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = isInternalLink(to)

  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      <StyledLink to={to} {...other}>
        {children}
      </StyledLink>
    )
  }
  return (
    <StyledLinkWithAnchor href={to} {...other} target="_blank">
      {children}
    </StyledLinkWithAnchor>
  )
}

export default Link
