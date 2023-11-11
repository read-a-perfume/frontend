import {FormControlLabel, Radio, styled} from '@mui/material'

interface Props {
  title: string
}

const RadioRoundedButton = ({title}: Props) => {
  return (
    <MuIFormControlLabel
      value={`${title}`}
      control={<Radio />}
      label={`${title}`}
    />
  )
}
export default RadioRoundedButton

const MuIFormControlLabel = styled(FormControlLabel)`
  .MuiRadio-root {
    height: 0;
    overflow: hidden;
    padding: 0;
    width: 0;
    opacity: 0;
  }

  .MuiFormControlLabel-label {
    display: inline-flex;
    width: 96px;
    height: 40px;
    padding: 5px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid #a9a9a9;
    font-size: 14px;
    color: #a9a9a9;
  }
  .MuiRadio-root.Mui-checked + .MuiFormControlLabel-label {
    border-color: #fe7156;
    color: #fe7156;
  }
`
