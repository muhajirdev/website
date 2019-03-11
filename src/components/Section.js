import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { bg, py, mx, maxW, px, mq } from '../styles'
import { colors, padding, maxWidth } from '../../tailwind'

const childStyle = css(mx('auto'), maxW(maxWidth.xl))

const Section = styled('section')(
  props => props.dark && bg(colors['grey-lighter']),
  props => (props.small ? py(padding[12]) : py(padding[32])),
  { '> *': childStyle },
  px(padding[4]),
  mq('md')(px[padding[16]])
)

export default Section
