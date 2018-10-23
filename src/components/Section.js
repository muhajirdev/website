import styled, { css } from 'react-emotion'

const darkBackground = css`
  ${tw`bg-grey-lighter`};
`

const Section = styled.section`
  ${tw`py-32 px-4 md:px-16`};
  > * {
    ${tw`mx-auto max-w-xl`};
  }
  ${props => props.dark && darkBackground};
`

export default Section
