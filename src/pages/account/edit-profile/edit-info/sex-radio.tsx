import {
  FormControlLabel,
  RadioGroup,
  Radio as _Radio,
  styled,
} from '@mui/material'
import useEditProfileForms from '@pages/account/hook/use-edit-profile-forms'

const Arr: {
  label: '남성' | '여성' | '선택하지않음'
  value: 'male' | 'female' | 'other'
}[] = [
  {label: '남성', value: 'male'},
  {label: '여성', value: 'female'},
  {label: '선택하지않음', value: 'other'},
]

const SexRadio = () => {
  const {sex} = useEditProfileForms()
 

  return (
    <RadioGroup
      row
      sx={{
        marginBottom: '52px',
      }}
    >
      {Arr.map((e, i) => (
        <FormControlLabel
          key={i}
          control={<Radio size="small"/>}
          label={e.label}
          {...sex.field}
          value={e.value}
        />
      ))}
    </RadioGroup>
  )
}

export default SexRadio

const Radio = styled(_Radio)(() => ({
  '&.Mui-checked': {
    color: 'black',
  },
}))
