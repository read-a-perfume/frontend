import {FormControlLabel, Radio, styled} from '@mui/material'

interface Props {
  title: string
}

const RadioRoundedButton = ({title}: Props) => {
  return (
    <>
      <MuIFormControlLabel
        sx={{
          color: '#a9a9a9',
        }}
        value={`${title}`}
        control={<Radio />}
        label={`${title}`}
      />
    </>
  )
}
export default RadioRoundedButton

const MuIFormControlLabel = styled(FormControlLabel)(({theme}) => ({
  ' .MuiRadio-root': {
    height: 0,
    overflow: 'hidden',
    padding: 0,
    width: 0,
    opacity: 0,
  },

  '.MuiFormControlLabel-label': {
    display: 'inline-flex',
    width: ' 96px',
    height: '40px',
    padding: '5px 0px',
    justifyContent: ' center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
    borderRadius: '10px',
    border: ' 2px solid #ededed',
    color: '#a9a9a9',
    ...theme.typography.body3,
  },
  '.MuiRadio-root.Mui-checked + .MuiFormControlLabel-label ': {
    borderColor: '#fe7156',
    color: ' #fe7156',
  },
}))
