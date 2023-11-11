interface DataProps {
  label: string // 라벨
  name: string // formData로 받을 영문이름
  placeholder: string
  register: object
}

export const formData: DataProps[] = [
  {
    label: '아이디',
    name: 'username',
    placeholder: '6~16자 / 영문 소문자, 숫자 사용 가능',
    register: {
      required: {
        value: true,
        message: '아이디를 입력해주세요.',
      },
      minLength: {
        value: 6,
        message: '최소 6자 이상 입력해주세요.',
      },
      maxLength: {
        value: 16,
        message: '최대 16자 이하 입력해주세요.',
      },
      pattern: {
        value: /^[a-z](?=.*\d)[a-z0-9]+$/g,
        message: '올바른 아이디를 입력해주세요.',
      },
    },
  },
  {
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
  {
    label: '비밀번호 재확인',
    name: 'passwordCheck',
    placeholder: '8~16자 / 문자, 숫자, 특수 문자 모두 혼용',
    register: {
      required: {
        value: true,
        message: '재확인 비밀번호를 입력하세요',
      },
    },
  },
  {
    label: '본인 확인 이메일',
    name: 'email',
    placeholder: '8~16자 / 문자, 숫자, 특수 문자 모두 혼용',
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
]
