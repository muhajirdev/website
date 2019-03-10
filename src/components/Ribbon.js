import styled from '@emotion/styled'
import { colors, padding } from '../../tailwind'
import { bg, px, mq, py } from '../styles'

const Ribbon = styled('div')(
  props => props.dark && bg(colors['grey-lighter']),
  px(padding[4]),
  py(padding[6]),
  mq('md')(px(padding[16]))
)

export default Ribbon
