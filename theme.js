import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import dracula from 'prism-react-renderer/themes/dracula'

const UNIT_PX = 5

const dimensions = {
  xsmall: `${Math.floor(UNIT_PX / 2)}px`,
  zero: `${UNIT_PX * 0}px`,
  small: `${UNIT_PX * 1}px`,
  medium: `${UNIT_PX * 2}px`,
  large: `${UNIT_PX * 4}px`,
  xlarge: `${UNIT_PX * 8}px`,
  xxlarge: `${UNIT_PX * 12}px`
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
      width: '100%',
      borderRadius: dimensions.small,
      background: colors.lightgray,
      padding: dimensions.xlarge,
      fontSize: '0.9em',
      margin: `${dimensions.medium} ${dimensions.zero}`
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
    },
    CodeSurfer: {
      pre: {
        color: 'text',
        backgroundColor: 'background'
      },
      code: {
        color: 'text',
        backgroundColor: 'background'
      },
      tokens: {
        'comment cdata doctype': {
          fontStyle: 'italic'
        },
        'builtin changed keyword punctuation operator tag deleted string attr-value char number inserted': {
          color: 'primary'
        },
        'line-number': {
          opacity: 0.8
        }
      },
      title: {
        backgroundColor: 'background',
        color: 'text'
      },
      subtitle: {
        color: '#d6deeb',
        backgroundColor: 'rgba(10,10,10,0.9)'
      },
      unfocused: {
        // only the opacity of unfocused code can be changed
        opacity: 0.1
      }
    }
  },
  components: {
    pre: props => {
      const { className: preClassName, children } = props
      const { className: codeClassName, children: code } = children.props
      const [language, ...rest] = codeClassName.replace(/^language-/, '').split(':')
      const fileName = rest.join(':')

      console.log(props, fileName)

      return (
        <Highlight {...defaultProps} code={code.trim()} language={language} theme={dracula}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${preClassName} ${className}`} style={{ ...style, ...(fileName ? { paddingTop: '60px' } : {}) }}>
              {
                fileName &&
                  <p style={{
                    position: 'absolute',
                    transform: `translate(-${dimensions.xlarge}, -${dimensions.xxlarge})`,
                    borderRadius: `${dimensions.small} ${dimensions.zero}`,
                    fontSize: '0.7em',
                    padding: `${dimensions.small} ${dimensions.large}`,
                    background: '#6272A4',
                    margin: 0
                  }}
                  >
                    {fileName}
                  </p>
              }
              {
                tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))
              }
            </pre>
          )}
        </Highlight>
      )
    }
  }
}
