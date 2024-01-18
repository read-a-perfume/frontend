import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import _Radio from '@mui/material/Radio'
import {styled} from '@mui/material'
import useEditProfileForms from '@pages/account/edit-profile/hook/use-edit-profile-forms'

const Arr: {
  label: '남성' | '여성' | '선택하지않음'
  value: 'MALE' | 'FEMALE' | 'OTHER'
}[] = [
  {label: '남성', value: 'MALE'},
  {label: '여성', value: 'FEMALE'},
  {label: '선택하지않음', value: 'OTHER'},
]

const SexRadio = () => {
  const {sex} = useEditProfileForms()

  return (
    <RadioGroup
      row
      sx={{
        marginBottom: '52px',
      }}
      {...sex.field}
    >
      {Arr.map((e, i) => (
        <FormControlLabel
          key={i}
          control={<Radio size="small" />}
          label={e.label}
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
