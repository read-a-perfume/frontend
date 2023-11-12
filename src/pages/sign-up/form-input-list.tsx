import {List, ListItem} from '@mui/material'
import FormTextFiledValidation from './form-textfiled-validation'
import FormEmailCheck from './form-email-check'
import {FieldErrors, UseFormRegister} from 'react-hook-form'

interface FormInputListProps {
  formData: any
  register: UseFormRegister<any>
  errors: FieldErrors<any>
}

const FormInputList: React.FC<FormInputListProps> = ({
  formData,
  register,
  errors,
}) => {
  return (
    <List sx={{width: '100%'}}>
      {formData.map(it => (
        <ListItem
          key={it.name}
          sx={{display: 'flex', alignItems: 'end', gap: '20px'}}
        >
          <FormTextFiledValidation
            label={it.label}
            name={it.name}
            placeholder={it.placeholder}
            showPassword={
              it.name === 'password' || it.name === 'confirmPassword'
            }
            register={register(`${it.name}`, {...it.register})}
            errors={errors && errors[`${it.name}`]}
          />
          {it.name === 'username' && <FormEmailCheck />}
          {it.name === 'email' && <FormEmailCheck />}
        </ListItem>
      ))}
    </List>
  )
}

export default FormInputList
