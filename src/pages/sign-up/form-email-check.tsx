import {Button, Grid, styled} from '@mui/material'

const FormEmailCheck: React.FC = () => {
  return (
    <Grid
      item
      xs={3}
      sx={{
        position: 'absolute',
        right: 42,
        top: 39,
      }}
    >
      <CheckButton variant="contained" disableElevation>
        중복확인
      </CheckButton>
    </Grid>
  )
}

export default FormEmailCheck
const CheckButton = styled(Button)(() => ({
  height: '55px',

  color: 'white',
}))

// sx={{
//   backgroundColor:
//     checkId === false
//       ? theme.palette.error.main
//       : checkId === true
//       ? theme.palette.grey[200]
//       : 'black',
// }}
// disabled={checkId}
