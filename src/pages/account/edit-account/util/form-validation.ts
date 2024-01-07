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

const [minLen, maxLen] = [5, 16]

export const pwFormValidation: ValidationType = {
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

export const emailFormValidation = {
  email: {
    required: {
      value: true,
      message: '이메일을 입력해주세요',
    },
    pattern: {
      value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: '올바른 이메일 형식으로 입력해주세요.',
    },
  },
  validationCode: {
    required: {
      value: true,
      message: '인증코드를 입력해주세요',
    },
  },
}
