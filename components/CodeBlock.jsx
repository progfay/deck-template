import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { dracula, colors as draculaColors } from '../theme/dracula'
import dimensions from '../theme/dimensions'

export const CodeBlock = props => {
  const { className: preClassName, children } = props
  const { className: codeClassName, children: code } = children.props
  const [language, ...rest] = codeClassName.replace(/^language-/, '').split(':')
  const fileName = rest.join(':')

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
                background: draculaColors.comment,
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
