import {Button, useTheme} from '@mui/material'

export interface ButtonProps {
  title: string
  type: string
  variant: 'contained' | 'outlined' | 'text'
  hover?: 'hover'
}

const MuiButton: React.FC<ButtonProps> = ({title, type, variant, hover}) => {
  const theme = useTheme()

  const styles = {
    primary: {
      backgroundColor: `${theme.palette.primary.main}`,
      color: '#fff',
    },

    dark: {
      backgroundColor: '#000',
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
