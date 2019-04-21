import { css } from '@emotion/core'
import { rounded, mb, py, px, fs } from 'monad-ui'
import { colors, margin, padding, textSizes } from '../../tailwind'

// eslint-disable-next-line
export const GeneralStyle = css(
  {
    border: `1px solid ${colors['grey-light']}`,
    outline: 0,
  },
  rounded,
  mb(margin[4]),
  py(padding[2]),
  px(padding[2]),
  fs(textSizes.sm)
)
