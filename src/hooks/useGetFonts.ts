const getColor = (backgroundColor: string) => {
  let color = ''

  switch (backgroundColor) {
    case 'primary':
      color = '#FE7156'
      break
    case 'secondary':
      color = '#202020'
      break
    case 'gray':
      color = '#F1F1F5'
      break
    case 'disabled':
      color = '#D9D9D9'
      break
    case 'white':
      color = '#fff'
      break
    case 'transparent':
      color = 'transparent'
      break
  }
  return color
}

const getFontSize = (fontSize: 'sm' | 'md' | 'lg') => {
  let font: '12px' | '14px' | '16px' = '14px'

  switch (fontSize) {
    case 'sm':
      font = '12px'
      break
    case 'md':
      font = '14px'
      break
    case 'lg':
      font = '16px'
      break
  }
  return font
}

export {getColor, getFontSize}
