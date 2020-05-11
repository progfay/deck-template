import React from 'react'

const UNIT_PX = 5

const dimensions = {
  xsmall: `${Math.floor(UNIT_PX / 2)}px`,
  zero: `${UNIT_PX * 0}px`,
  small: `${UNIT_PX * 1}px`,
  medium: `${UNIT_PX * 2}px`,
  large: `${UNIT_PX * 4}px`,
  xlarge: `${UNIT_PX * 8}px`
}

const colors = {
  black: '#05061D',
  white: '#FFFFFF',
  blue: '#1577D8',
  red: '#EE2212',
  orange: '#FFA327',
  gray: '#9492B0',
  lightgray: '#EBEBEB',
  purple: '#9060C0'
}

export default {
  fonts: {
    body: '-apple-system, Segoe UI, Helvetica Neue, Hiragino Kaku Gothic ProN, "メイリオ", meiryo, sans-serif',
    heading: '-apple-system, Segoe UI, Helvetica Neue, Hiragino Kaku Gothic ProN, "メイリオ", meiryo, sans-serif',
    monospace: '"Operator Mono", "Menlo", "Monaco", "Consolas", monospace'
  },
  colors: {
    text: colors.black,
    background: colors.white,
    primary: colors.blue
  },
  fontWeights: {
    text: 500,
    heading: 600,
    bold: 600
  },
  text: {
    heading: {
      position: 'relative',
      left: `-${dimensions.xlarge}`,
      margin: dimensions.zero,
      marginBottom: dimensions.large
    }
  },
  styles: {
    root: {
      background: colors.black,
      overscrollBehavior: 'none'
    },
    Slide: {
      borderRadius: dimensions.small,
      overflow: 'scroll',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '100px'
    },
    Header: {
      width: '100vw',
      padding: `${dimensions.large} ${dimensions.zero} ${dimensions.small} 60px`,
      background: colors.white,
      borderBottom: `solid ${colors.lightgray} ${dimensions.xsmall}`,
      borderRadius: `${dimensions.small} ${dimensions.small} ${dimensions.zero} ${dimensions.zero}`
    },
    Footer: {
      width: '100vw',
      background: colors.white,
      borderRadius: `${dimensions.zero} ${dimensions.zero} ${dimensions.small} ${dimensions.small}`
    },
    strong: {
      color: colors.blue,
      fontSize: '1.2em',
      marginLeft: dimensions.small,
      marginRight: dimensions.small
    },
    pre: {
      color: colors.black,
      bg: colors.white
    },
    inlineCode: {
      color: colors.black,
      background: colors.lightgray,
      fontSize: '0.9em',
      padding: dimensions.small,
      borderRadius: dimensions.small
    },
    blockquote: {
      width: '100%',
      background: colors.lightgray,
      borderLeft: `solid ${colors.gray} ${dimensions.small}`,
      borderRadius: dimensions.xsmall,
      paddingLeft: dimensions.large,
      paddingRight: dimensions.large,
      margin: dimensions.zero,
      marginBlockEnd: '1em'
    },
    p: {
      margin: dimensions.zero,
      lineHeight: 2
    },
    ul: {
      margin: `${dimensions.zero} ${dimensions.zero} ${dimensions.large} ${dimensions.zero}`
    },
    ol: {
      margin: `${dimensions.zero} ${dimensions.zero} ${dimensions.large} ${dimensions.zero}`
    },
    li: {
      lineHeight: 2
    },
    table: {
      borderCollapse: 'collapse',
      borderSpacing: 0
    },
    th: {
      border: `solid ${dimensions.xsmall} ${colors.black}`,
      padding: dimensions.medium
    },
    td: {
      border: `solid ${dimensions.xsmall} ${colors.black}`,
      padding: dimensions.medium
    },
    a: {
      color: colors.blue,
      pointerEvents: 'auto'
    },
    del: {
      color: colors.gray
    },
    em: {
      fontWeight: 'lighter'
    },
    img: {
      maxWidth: '100%'
    }
  },
  components: {}
}
