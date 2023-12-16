import {List, ListItem} from '@mui/material'
import {FieldErrors, UseFormRegister} from 'react-hook-form'
import SignUpValidation from '../sign-up-validation'

interface FormInputListProps {
  formData: any
  register: UseFormRegister<any>
  errors: FieldErrors<any>
  control: any
}

const SignupInputsIndividual: React.FC<FormInputListProps> = ({
  formData,
  register,
  errors,
  control,
}) => {
  return (
    <List sx={{width: '100%'}}>
      {formData.map(it => (
        <ListItem
          key={it.name}
          sx={{display: 'flex', alignItems: 'end', gap: '20px'}}
        >
          <SignUpValidation
            control={control}
            label={it.label}
            name={it.name}
            placeholder={it.placeholder}
            showPassword={
              it.name === 'password' || it.name === 'confirmPassword'
            }
            register={register(`${it.name}`, {...it.register})}
            errors={errors && errors[`${it.name}`]}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default SignupInputsIndividual
