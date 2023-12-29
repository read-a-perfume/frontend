interface eachType {
  required?: {
    value: boolean
    message: string
  }
  minLength?: {
    value: number
    message: string
  }
  maxLength?: {
    value: number
    message: string
  }
}

interface ValidationType {
  oldPassword: eachType
  newPassword: eachType
  confirmPassword: eachType
}

const [minLen,maxLen] = [5,16];

const formValidation: ValidationType = {
  oldPassword: {
    required: {
      value: true,
      message: '현재 비밀번호를 입력해주세요',
    },
    minLength: {
      value: minLen,
      message: `비밀번호는 최소 ${minLen}자리 입니다.`,
    },
    maxLength: {
      value: maxLen,
      message: `비밀번호는 최대 ${maxLen}자리 입니다.`,
    },
  },
  newPassword: {
    required: {
      value: true,
      message: '새 비밀번호를 입력해주세요',
    },
    minLength: {
      value: minLen,
      message: `비밀번호는 최소 ${minLen}자리 입니다.`,
    },
    maxLength: {
      value: maxLen,
      message: `비밀번호는 최대 ${maxLen}자리 입니다.`,
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: '확인 비밀번호를 입력해주세요',
    },
    minLength: {
      value: minLen,
      message: `비밀번호는 최소 ${minLen}자리 입니다.`,
    },
    maxLength: {
      value: maxLen,
      message: `비밀번호는 최대 ${maxLen}자리 입니다.`,
    },
  },
}

export default formValidation
