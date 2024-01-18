import Button from '@mui/material/Button'
import {useTheme} from '@mui/material'
import React from 'react'
export interface ButtonProps {
  title: string
  type: string
  width?: string // 구체적인 px이나 퍼센트 적기
  icon?: React.ReactNode // 아이콘 컴포넌트를 주입
  handleClick?: (event: React.MouseEvent<HTMLButtonElement> | any) => void
  height?: string
  formType?: 'button' | 'submit'
  disabled?: boolean
}

const MuiButton: React.FC<ButtonProps> = ({
  title,
  type,
  width,
  icon,
  handleClick,
  height = '48px',
  formType = 'button',
  disabled = false,
}) => {
  const theme = useTheme()

  const styles = {
    primary: {
      backgroundColor: `${theme.palette.primary.main}`,
      color: '#fff',
    },

    dark: {
      backgroundColor: theme.palette.secondary.main,
      color: '#fff',
    },
    grey: {
      backgroundColor: '#E7E7E7',
      color: '#707070',
    },
    white: {
      backgroundColor: '#Fff',
      color: '#191919',
      border: `1px solid ${theme.palette.grey[400]}`,
    },
    transparent: {
      backgroundColor: 'transparent',
      color: '#fff',
      border: `1px solid white`,
    },
  }
  return (
    <Button
      variant="contained"
      type={formType}
      disabled={disabled}
      sx={{
        '&.MuiButtonBase-root': {
          width: `${width ? width : '100%'}`,
          borderRadius: '10px',
          fontWeight: 500,
          padding: 0,
          height: height,

          boxShadow: 'none',
          ...styles[`${type}`],
        },
        '&.MuiButtonBase-root::hover': {
          backgroundColor: 'inherit',
        },
      }}
      disableRipple
      onClick={handleClick}
    >
      {icon} {title}
    </Button>
  )
}
export default MuiButton
