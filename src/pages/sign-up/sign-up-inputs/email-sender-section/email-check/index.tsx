import Box from '@mui/material/Box'
import {styled} from '@mui/material'
import MuiButton from '@components/base/mui-button'
import {IfSignUpEmailCheckProps} from '../../../types'

const EmailCheck = ({
  beforeTitle,
  afterTitle,
  value,
  handleEmailSend,
  handleEmailChange,
  isAuthCheck,
}: IfSignUpEmailCheckProps) => {
  return (
    <>
      <SenderButtonWrapper>
        <MuiButton
          formType="button"
          type="dark"
          title={isAuthCheck ? afterTitle : beforeTitle}
          handleClick={() => handleEmailSend(value)}
        />
      </SenderButtonWrapper>
      {isAuthCheck && (
        <EmailChangeButtonWrapper>
          <MuiButton
            formType="submit"
            type="grey"
            title="이메일 변경"
            handleClick={() => handleEmailChange()}
          />
        </EmailChangeButtonWrapper>
      )}
    </>
  )
}

export default EmailCheck

const SenderButtonWrapper = styled(Box)({
  position: 'absolute',
  right: '-100px',
  top: '35px',
  display: 'flex',
})

const EmailChangeButtonWrapper = styled(Box)({
  position: 'absolute',
  right: '-180px',
  top: '35px',
  display: 'flex',
})
