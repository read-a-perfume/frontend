import {FieldValues, UseControllerReturn} from 'react-hook-form'

export interface IfUsePostCheckDuplicateProps {
  successMessage: string
  failedMessage: string
  userId: string
}

export interface IfSignUpEmailCheckProps {
  title: string
  value: string
  handleEmailDuplicateCheck: (email: string) => void
}

export interface IfSignUpEmailConfirmProps {
  title: string
  emailAdreess: string
  emailCode: string
  confirmEmail: (data) => void
}

export interface IfSignUpIdCheckProps {
  title: string
  value: string
  handleIdDuplicateCheck: (id: string) => void
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
  handleUsernameCheck: (username: string) => void
}
export interface IfPasswordProps {
  password: UseControllerReturn<FieldValues, 'password'>
}

export interface IfPasswordConfirmProps {
  passwordConfirm: UseControllerReturn<FieldValues, 'passwordConfirm'>
}

// 이메일 인증코드 확인 섹션
export interface IfEmailConfirmSenderProps {
  email: UseControllerReturn<FieldValues, 'email'>
  handleEmailConfirmSend: (email: string) => void
}

// 이메일 인증코드 확인 섹션
export interface IfEmailAuthCodeConfirmSectionProps {
  emailAuthCode: UseControllerReturn<FieldValues>
}
