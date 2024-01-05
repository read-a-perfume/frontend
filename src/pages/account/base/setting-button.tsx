import { Button,styled } from "@mui/material";

const SettingButton = styled(Button)(({theme}) => ({  
    height: '33px',
    border: 'solid 1.7px #ededed',
    color: 'black',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#eee',
    },
    fontSize: theme.typography.body3.fontSize,
  }))
  
export default SettingButton