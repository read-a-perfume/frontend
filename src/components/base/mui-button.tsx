import {Button, useTheme} from '@mui/material'

export interface ButtonProps {
  title: string
  type: string
  variant: 'contained' | 'outlined' | 'text'
  hover?: 'hover'
  width?: string
}

const MuiButton: React.FC<ButtonProps> = ({
  title,
  type,
  variant,
  hover,
  width,
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
      ':hover': {background: ''},
    },
    grey: {
      backgroundColor: '#EDEDED',
      color: '#fff',
    },
    white: {
      backgroundColor: '#EDEDED',
      color: '#fff',
    },
  }
  return (
    <Button
      variant={`${variant}`}
      disableRipple
      sx={{
        width: `${width ? width : '100%'}`,
        borderRadius: '10px',
        height: '48px',

        ...styles[`${type}`],
      }}
    >
      {title}
    </Button>
  )
}
export default MuiButton
