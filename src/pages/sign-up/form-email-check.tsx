import {Button, Grid, styled} from '@mui/material'

interface Props {
  title: string
}

const FormEmailCheck: React.FC<Props> = ({title}) => {
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
      {title === '중복확인' && (
        <CheckButton variant="contained" disableElevation bg="#EFEFEF">
          {title}
        </CheckButton>
      )}
      {title === '인증(필수)' && (
        <CheckButton variant="contained" disableElevation bg="#202020">
          {title}
        </CheckButton>
      )}
    </Grid>
  )
}

export default FormEmailCheck

interface CheckButtonProps {
  bg: string
}

const CheckButton = styled(Button)<CheckButtonProps>(props => ({
  height: '55px',
  backgroundColor: `${props.bg}`,
  color: `${props.bg === '#EFEFEF' ? '#B4B4B4' : '#ffff'}`,
}))
