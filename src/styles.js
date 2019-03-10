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

export const ml = arg =>
  css({
    marginLeft: arg,
  })

export const mr = arg =>
  css({
    marginRight: arg,
  })

export const mx = arg => css(ml(arg), mr(arg))

export const mt = arg =>
  css({
    marginTop: arg,
  })

export const mb = arg =>
  css({
    marginBottom: arg,
  })

export const my = arg => css(mt(arg), mb(arg))

export const m = arg => css(my(arg), mx(arg))

/**
 *
 * @param {(string|number)} arg
 */
export const width = arg =>
  css({
    width: arg,
  })

export const w = width

export const maxWidth = arg =>
  css({
    maxWidth: arg,
  })

export const maxW = maxWidth
