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
  emailCode:string;
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
