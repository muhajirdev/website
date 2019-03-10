import styled, { css } from 'react-emotion'

const horizontalSpace = css`
  ${tw`pl-4 sm:pl-8`};
`

const Space = styled('div')`
  ${props => props.horizontal && horizontalSpace};
`
export default Space
