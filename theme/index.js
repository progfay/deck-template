import dimensions from './dimensions'
import colors from './colors'
import { CodeBlock } from '../components/CodeBlock'

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
      padding: `${dimensions.large} ${dimensions.zero} ${dimensions.small} ${dimensions.xxlarge}`,
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
      width: '100%',
      borderRadius: dimensions.small,
      background: colors.lightgray,
      padding: dimensions.xlarge,
      fontSize: '0.9em',
      margin: `${dimensions.medium} ${dimensions.zero}`,
      whiteSpace: 'pre-wrap'
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
  components: {
    pre: CodeBlock
  }
}
