import styled from '@emotion/styled'
import {theme} from '@theme/index.js'
import {useState} from 'react'
import {useEffect} from 'react'
import {getColor, getFontSize} from '../../hooks/useGetFonts.js'

interface ButtonProps {
  text: string
  color?: string
  width?: string
  height?: string
  fontSize: 'sm' | 'md' | 'lg'
  backgroundColor:
    | 'primary'
    | 'secondary'
    | 'gray'
    | 'disabled'
    | 'white'
    | 'transparent'
  disabled?: boolean
  onClick?: () => void
  style?: React.CSSProperties
  hoverBg?: string
  fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = ({
  width = '137px',
  height = '34px',
  color = 'white',
  hoverBg = 'white',
  fullWidth = false,
  fontSize,
  text,
  backgroundColor,
  disabled,
  onClick,
  style,
}) => {
  const [bg, setBg] = useState<string>('')
  const [textColor, setTextColor] = useState<string>('')
  const [size, setSize] = useState<'12px' | '14px' | '16px'>('12px')

  useEffect(() => {
    setBg(getColor(backgroundColor))
  }, [backgroundColor])

  useEffect(() => {
    setSize(getFontSize(fontSize))
  }, [fontSize])

  useEffect(() => {
    if (disabled) {
      setTextColor(theme.palette.grey['500'])
    } else {
      setTextColor(color)
    }
  }, [color])

  return (
    <ButtonLayout
      width={width}
      height={height}
      textColor={textColor}
      backgroundColor={bg}
      disabled={disabled}
      onClick={onClick}
      style={{...style}}
      hoverBg={hoverBg}
      fullWidth={fullWidth}
      fontSize={size}
    >
      {text}
    </ButtonLayout>
  )
}

const ButtonLayout = styled.button(
  ({
    height,
    width,
    textColor,
    fontSize,
    backgroundColor,
    hoverBg,
    fullWidth,
  }: {
    height: string
    width: string
    textColor: string
    fontSize: '12px' | '14px' | '16px'
    backgroundColor: string
    hoverBg: string
    fullWidth: boolean
  }) => ({
    height,
    width: fullWidth ? '100%' : width,
    fontSize,
    fontWeight: fontSize === '14px' ? '400' : '500',
    color: textColor ? textColor : 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    backgroundColor,
    '&:hover': {
      backgroundColor: hoverBg,
    },
  }),
)

export default Button
