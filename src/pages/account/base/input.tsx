import {TextField, styled} from '@mui/material'

export const Input = styled(TextField)<{width?: string}>(
  ({width = '342px', theme}) => ({
    '& .MuiOutlinedInput-root': {
      maxHeight: '48px',
      width: width,
      fontWeight: 500,
      fontSize: theme.typography.body3.fontSize,
      marginBottom: '20px',
    },
  }),
)

export const PwInput = styled(Input)(({theme}) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.grey[200],
    borderColor: theme.palette.grey[300],
    marginBottom: 0,
    
  },
  '& .Mui-focused': {
    backgroundColor: '#fff',
  },
}))
