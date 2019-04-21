import styled from '@emotion/styled'
import { bg, px, mq, py } from 'monad-ui'
import { colors, padding } from '../../tailwind'

const Ribbon = styled('div')(
  props => props.dark && bg(colors['grey-lighter']),
  px(padding[4]),
  py(padding[6]),
  mq('md')(px(padding[16]))
)

export default Ribbon
