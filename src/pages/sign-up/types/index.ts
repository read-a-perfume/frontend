import {FieldValues, UseControllerReturn} from 'react-hook-form'

export interface IfUsePostCheckDuplicateProps {
  successMessage: string
  failedMessage: string
  userId: string
}

export interface IfSignUpEmailConfirmProps extends IfAuthButtonTitle {
  emailAdreess: string
  emailCode: string
  confirmEmail: (data) => void
}

export interface IfUserNameCheckButtonProps {
  beforeTitle: string
  afterTitle: string
  value: string
  handleIdDuplicateCheck: (id: string) => void
  isUserNameCheck: boolean
}
export interface IfFormTextFiledValidationProps {
  placeholder: string // 입력 전 값
  type: string
  method: any
  compoment?: React.ReactNode
  name: string
}

export interface IfFormFooterProps {
  subText: string
  title: string
}

export interface IfSignUpInputBase {
  title: string
  value: string
}
//유저이름 섹션
export interface IfUserNameProps {
  username: UseControllerReturn<FieldValues, 'username'>
  handleUserNameConfirm: (username: string) => void
  handleUserNameChange: () => void
}
export interface IfPasswordProps {
  password: UseControllerReturn<FieldValues, 'password'>
}

export interface IfPasswordConfirmProps {
  passwordConfirm: UseControllerReturn<FieldValues, 'passwordConfirm'>
}

export interface IfSignUpEmailCheckProps extends IfAuthButtonTitle {
  value: string
  handleEmailSend: (email: string) => void
  handleEmailChange: () => void
}

// 이메일 인증코드 확인 섹션
export interface IfEmailConfirmSenderProps {
  email: UseControllerReturn<FieldValues, 'email'>
  handleEmailSend: (email: string) => void
  handleEmailChange: () => void
}

// 이메일 인증코드 확인 섹션
export interface IfEmailAuthCodeConfirmSectionProps {
  emailAuthCode: UseControllerReturn<FieldValues>
}

interface IfIsAuthCheck {
  isAuthCheck: boolean
}

interface IfAuthButtonTitle extends IfIsAuthCheck {
  beforeTitle: string
  afterTitle: string
}
