import EditTitle from '@pages/account/base/edit-title'
import Divider from "@mui/material/Divider";
import {FormProvider, useForm} from 'react-hook-form'
import {EmailFormDataType} from '../type'
import usePostEmail from '../hook/use-post-email'
import EmailForm from './email-form'
import ValidationCodeForm from './validation-code-form'
import LoadingOverlay from '@components/base/loading-overlay'

interface proptype {
  defaultEmail: string
}

const EditEmailContent = ({defaultEmail}: proptype) => {
  const emailMethods = useForm<EmailFormDataType>({
    defaultValues: {
      email: defaultEmail,
      validationCode: '',
    },
  })

  const {trigger, setError} = emailMethods

  const {
    onEmailChangeSubmit,
    onEmailCheckSubmit,
    emailCheckLoading,
    emailSaveLoading,
  } = usePostEmail(trigger, setError)

  return (
    <>
      {(emailCheckLoading || emailSaveLoading) && <LoadingOverlay />}
      <FormProvider {...emailMethods}>
        <EditTitle title="이메일 변경" />
        <form onSubmit={emailMethods.handleSubmit(onEmailCheckSubmit)}>
          <EmailForm />
        </form>
        <form onSubmit={emailMethods.handleSubmit(onEmailChangeSubmit)}>
          <ValidationCodeForm />
        </form>
        <Divider sx={{margin: '44px 0'}} />
      </FormProvider>
    </>
  )
}

export default EditEmailContent
