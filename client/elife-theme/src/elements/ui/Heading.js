import { css } from 'styled-components'
import { th } from '@pubsweet/ui-toolkit'

export default css`
  /* clear browser-added margin and font-size */
  margin-top: 0px;
  color: ${th('colorText')};
`
export const H1 = css`
  padding-top: 18px;
  margin-bottom: 18px;
  line-height: ${th('fontLineHeight1')};
`

export const H2 = css`
  padding-top: 9px;
  margin-bottom: 9px;
  line-height: ${th('fontLineHeight2')};
`

export const H3 = css`
  padding-top: 12px;
  margin-bottom: 12px;
  line-height: ${th('fontLineHeight3')};
`

export const H4 = css`
  padding-top: 12px;
  margin-bottom: 12px;
  line-height: ${th('fontLineHeight4')};
`
