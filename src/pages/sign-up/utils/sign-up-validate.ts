const signUpvalidate = {
  username: {
    label: '아이디',
    name: 'username',
    placeholder:
      '알파벳 소문자, 숫자, 마침표(.) 및 밑줄(_)을 포함할 수 있습니다',
    register: {
      required: {
        value: true,
        message: '아이디를 입력해주세요.',
      },
      minLength: {
        value: 4,
        message: '최소 4자 이상 입력해주세요.',
      },
      maxLength: {
        value: 16,
        message: '최대 16자 이하 입력해주세요.',
      },
      pattern: {
        value: /^[a-zA-Z][a-zA-Z0-9._]{2,29}$/,
        message: '올바른 아이디를 입력해주세요.',
      },
    },
  },
  password: {
    label: '비밀번호',
    name: 'password',
    placeholder: '8~16자 / 문자, 숫자, 특수 문자 모두 혼용',
    register: {
      required: {
        value: true,
        message: '비밀번호를 입력하세요',
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
  },
  confirmPassword: {
    label: '비밀번호 재확인',
    name: 'confirmPassword',
    placeholder: '8~16자 / 문자, 숫자, 특수 문자 모두 혼용',
    register: {
      required: {
        value: true,
        message: '재확인 비밀번호를 입력하세요',
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
  },
  email: {
    label: '본인 확인 이메일',
    name: 'email',
    placeholder: '@필수',
    register: {
      required: {
        value: true,
        message: '이메일을 입력해주세요.',
      },
      pattern: {
        value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: '올바른 이메일 형식으로 입력해주세요.',
      },
    },
  },
}

export const formCheckboxData = {
  age: {
    label: '만 14세 이상입니다. (*필수)',
    name: 'age',
    register: {
      required: '만 14세 이상입니다. 동의가 필요합니다.',
    },
  },
  terms: {
    label: '이용약관 (*필수)',
    name: 'terms',
    register: {
      required: '이용약관에 동의가 필요합니다.',
    },
  },
  privacy: {
    label: '개인정보 수집 및 이용동의 (*필수)',
    name: 'privacy',
    register: {
      required: '개인정보 수집 및 이용에 동의가 필요합니다.',
    },
  },
  marketing: {
    label: '개인정보 마케팅 활용 동의 (선택)',
    name: 'marketing',
    register: {},
  },
  notification: {
    label: '이벤트, 쿠폰, 특가 알림 메일 수신 (선택)',
    name: 'notification',
    register: {},
  },
}
export default signUpvalidate
