import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";

export const Input = styled(TextField)<{width?: string}>(
  ({width = '342px', theme}) => ({
    maxHeight: '48px',
    '& .MuiOutlinedInput-root': {
      width: width,
      fontWeight: 500,
      fontSize: theme.typography.body3.fontSize,
      marginBottom: 0,
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
