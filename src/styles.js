import { css } from '@emotion/core'
import { prop, compose } from 'ramda'

export const name = '@muhajirdev/ui'

/* FLEX */
export const flex = css({ display: 'flex' })
export const centerX = css(flex, { justifyContent: 'center' })
export const centerY = css(flex, { alignItems: 'center' })
export const flexWrap = (arg = 'wrap') => css(flex, { flexWrap: arg })
export const flexDirection = arg => css(flex, { flexDirection: arg })
export const justifyBetween = css(flex, { justifyContent: 'space-between' })
export const flexCol = flexDirection('column')

/* MARGIN */
export const ml = arg => css({ marginLeft: arg })
export const mr = arg => css({ marginRight: arg })
export const mt = arg => css({ marginTop: arg })
export const mb = arg => css({ marginBottom: arg })
export const mx = arg => css(ml(arg), mr(arg))
export const my = arg => css(mt(arg), mb(arg))
export const m = arg => css(my(arg), mx(arg))

/* PADDING */
export const pl = arg => css({ paddingLeft: arg })
export const pr = arg => css({ paddingRight: arg })
export const pt = arg => css({ paddingTop: arg })
export const pb = arg => css({ paddingBottom: arg })
export const px = arg => css(pl(arg), pr(arg))
export const py = arg => css(pt(arg), pb(arg))
export const p = arg => css(py(arg), px(arg))

/* COLOR */
export const bg = arg => css({ background: arg })
export const color = arg => css({ color: arg })

/* LENGTH */
export const width = arg => css({ width: arg })
export const maxWidth = arg => css({ maxWidth: arg })
export const w = width
export const maxW = maxWidth

/* Typography */
export const lh = arg => css({ lineHeight: arg })
export const fs = arg => css({ fontSize: arg })
export const fw = arg => css({ fontWeight: arg })

/* Border */
export const round = arg => css({ borderRadius: arg })
export const rounded = round('.25rem')

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}
export const selectMq = size =>
  compose(
    bp => `@media (min-width: ${bp})`,
    prop(size)
  )(breakpoints)

export const mq = size => style => ({ [selectMq(size)]: style })

export const hidden = css({ display: 'none' })
export const block = css({ display: 'block' })
