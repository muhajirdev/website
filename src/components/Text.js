import styled from '@emotion/styled'
import { color, fs, mq, mb, fw, pt } from 'monad-ui'
import { colors, textSizes, margin, fontWeights, padding } from '../../tailwind'

export const Title = styled('h1')(
  color(colors.black),
  fs(textSizes.base),
  mb(margin[4]),
  mq('md')([fs(textSizes.xl), mb(margin.base)])
)
export const Subtitle = styled('h6')(color(colors.grey))
export const Tagline = styled('h2')(
  color(colors['green-darkest']),
  fs(textSizes['2xl']),
  mq('md')(fs(textSizes['5xl']))
)

export const Paragraph = props => <p {...props} />

export const Meta = styled('h5')(
  color(colors['grey-darker']),
  fs(textSizes.xs),
  fw(fontWeights.normal),
  pt(padding[2])
)

export const LinkItem = styled('h3')(
  color(colors['grey-darkest']),
  fs(textSizes.xs),
  mb(0)
)
