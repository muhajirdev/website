import { css } from '@emotion/core'

export const name = '@muhajirdev/ui'

export const flex = css({
  display: 'flex',
})

export const centerX = css(flex, {
  justifyContent: 'center',
})

export const centerY = css(flex, {
  alignItems: 'center',
})

/**
 *
 * @param {(string|number)} arg
 */
export const width = arg =>
  css({
    width: arg,
  })
