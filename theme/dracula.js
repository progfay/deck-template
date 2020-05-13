export const colors = {
  background: '#282A36',
  currentLine: '#44475A',
  selection: '#44475A',
  foreground: '#F8F8F2',
  comment: '#6272A4',
  cyan: '#8BE9FD',
  green: '#50FA7B',
  orange: '#FFB86C',
  pink: '#FF79C6',
  purple: '#BD93F9',
  red: '#FF5555',
  yellow: '#F1FA8C'
}

const styles = [
  {
    types: ['punctuation', 'symbol'],
    style: { color: colors.foreground }
  },
  {
    types: ['comment'],
    style: { color: colors.comment }
  },
  {
    types: ['inserted', 'function'],
    style: { color: colors.green }
  },
  {
    types: ['changed'],
    style: { color: colors.orange }
  },
  {
    types: ['string', 'char', 'tag', 'selector'],
    style: { color: colors.pink }
  },
  {
    types: ['prolog', 'constant', 'builtin'],
    style: { color: colors.purple }
  },
  {
    types: ['keyword', 'variable'],
    style: { color: colors.purple, fontStyle: 'italic' }
  },
  {
    types: ['deleted'],
    style: { color: colors.red }
  },
  {
    types: ['attr-name'],
    style: { color: colors.yellow }
  }
]

export const prismFormat = {
  plain: {
    color: colors.foreground,
    backgroundColor: colors.background
  },
  styles
}

export const codeSurferFormat = {
  colors: {
    text: colors.foreground,
    background: colors.background,
    primary: colors.pink
  },
  styles: {
    CodeSurfer: {
      tokens: styles.reduce(
        (accumulator, { types, style }) => (
          {
            ...accumulator,
            ...types.reduce(
              (acc, type) => ({ ...acc, [type]: style }),
              {}
            )
          }
        ),
        {}
      ),
      title: {
        color: colors.foreground,
        backgroundColor: colors.background
      },
      subtitle: {
        color: '#d6deeb',
        backgroundColor: 'rgba(10,10,10,0.9)'
      },
      pre: {
        color: colors.foreground,
        backgroundColor: colors.background
      },
      code: {
        color: colors.foreground,
        backgroundColor: colors.background
      }
    }
  }
}
