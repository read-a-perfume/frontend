import Box from '@mui/material/Box'
import MuiButton from '@components/base/mui-button'
import {styled} from '@mui/material'

const UserNameCheckButton = ({
  beforeTitle,
  afterTitle,
  value,
  handleUserNameConfirm,
  isAuthCheck,
  handleUserNameChange,
}: any) => {
  return (
    <>
      <SenderButtonWrapper>
        <MuiButton
          type={isAuthCheck ? 'grey' : 'dark'}
          title={isAuthCheck ? afterTitle : beforeTitle}
          handleClick={() => handleUserNameConfirm(value)}
          disabled={isAuthCheck}
        />
      </SenderButtonWrapper>
      <ChangeButtonWrapper>
        {isAuthCheck && (
          <MuiButton
            type={'dark'}
            title="아이디 변경"
            handleClick={() => handleUserNameChange()}
          />
        )}
      </ChangeButtonWrapper>
    </>
  )
}

export default UserNameCheckButton

const SenderButtonWrapper = styled(Box)({
  position: 'absolute',
  right: '-100px',
  top: '35px',
  display: 'flex',
})
const ChangeButtonWrapper = styled(Box)({
  position: 'absolute',
  right: '-180px',
  top: '35px',
  display: 'flex',
})
