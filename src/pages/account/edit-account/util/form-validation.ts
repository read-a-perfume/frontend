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

const formValidation: ValidationType = {
  oldPassword: {
    required: {
      value: true,
      message: '현재 비밀번호를 입력해주세요',
    },
    minLength: {
      value: 8,
      message: '비밀번호는 최소 8자리 입니다.',
    },
    maxLength: {
      value: 16,
      message: '비밀번호는 최대 16자리 입니다.',
    },
  },
  newPassword: {
    required: {
      value: true,
      message: '현재 비밀번호를 입력해주세요',
    },
    minLength: {
      value: 8,
      message: '비밀번호는 최소 8자리 입니다.',
    },
    maxLength: {
      value: 16,
      message: '비밀번호는 최대 16자리 입니다.',
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: '현재 비밀번호를 입력해주세요',
    },
    minLength: {
      value: 8,
      message: '비밀번호는 최소 8자리 입니다.',
    },
    maxLength: {
      value: 16,
      message: '비밀번호는 최대 16자리 입니다.',
    },
  },
}

export default formValidation
