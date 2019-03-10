import styled, { css } from 'react-emotion'

const darkBackground = css`
  ${tw`bg-grey-lighter`};
`

const paddingYBig = css`
  ${tw`py-32`};
`

const paddingYSmall = css`
  ${tw`py-12`};
`

const Section = styled('section')`
  ${tw`px-4 md:px-16`};
  > * {
    ${tw`mx-auto max-w-xl`};
  }
  ${props => props.dark && darkBackground};
  ${props => (props.small ? paddingYSmall : paddingYBig)};
`

export default Section
