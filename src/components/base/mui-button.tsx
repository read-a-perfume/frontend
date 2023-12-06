import {Button, useTheme} from '@mui/material'

export interface ButtonProps {
  title: string
  type: string
  variant: 'contained' | 'outlined' | 'text'
  hover?: 'hover'
  width?: string
}

const MuiButton: React.FC<ButtonProps> = ({title, type, variant, width}) => {
  const theme = useTheme()

  const styles = {
    primary: {
      backgroundColor: `${theme.palette.primary.main}`,
      color: '#fff',
    },

    dark: {
      backgroundColor: theme.palette.secondary.main,
      color: '#fff',
      ':hover': {background: ''},
    },
    grey: {
      backgroundColor: theme.palette.grey[400],
      color: theme.palette.grey[600],
    },
    white: {
      backgroundColor: '#EDEDED',
      color: '#fff',
    },
  }
  return (
    <Button
      variant={`${variant}`}
      sx={{
        '&.MuiButtonBase-root': {
          width: `${width ? width : '100%'}`,
          borderRadius: '10px',
          fontWeight: 500,
          height: '48px',
          boxShadow: 'none',
          ...styles[`${type}`],
        },
        '&.MuiButtonBase-root::hover': {
          backgroundColor: 'inherit',
        },
      }}
      disableRipple
    >
      {title}
    </Button>
  )
}
export default MuiButton
