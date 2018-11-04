import styled, { css } from 'react-emotion'

const backgroundDark = css`
  ${tw`bg-grey-lighter`};
`

const Ribbon = styled.div`
  ${tw`px-4 md:px-16 py-6 flex justify-between`};
  ${props => props.dark && backgroundDark};
`

export default Ribbon
