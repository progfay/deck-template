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

export const dracula = {
  plain: {
    color: colors.foreground,
    backgroundColor: colors.background
  },
  styles: [
    {
      types: ['punctuation', 'symbol'],
      style: { color: colors.foreground }
    },
    {
      types: ['comment'],
      style: { color: colors.comment }
    },
    {
      types: ['class-name', 'known-class-name', 'method'],
      style: { color: colors.cyan }
    },
    {
      types: ['inserted'],
      style: { color: colors.green }
    },
    {
      types: ['changed', 'parameter'],
      style: { color: colors.orange }
    },
    {
      types: ['tag', 'selector', 'operator', 'keyword'],
      style: { color: colors.pink }
    },
    {
      types: ['prolog', 'constant', 'builtin', 'number'],
      style: { color: colors.purple }
    },
    {
      types: ['variable'],
      style: { color: colors.purple, fontStyle: 'italic' }
    },
    {
      types: ['deleted'],
      style: { color: colors.red }
    },
    {
      types: ['char', 'string', 'attr-name'],
      style: { color: colors.yellow }
    }
  ]
}
