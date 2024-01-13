// 로그인
export interface IfLoginRequeset {
  username: string
  password: string
}

//로그인 중인 유저 프로필 조회

export interface IfLoginUserProfileResponse
  extends Omit<IfLoginRequeset, 'password'> {
  sex: 'MALE' | 'FEMALE' | 'OTHER'
  birthday: string
  bio: string
  email: string
  userId: string | number
  thumbnail: string
}

//회원가입 요청
export interface IfSignUpRequest extends IfLoginRequeset {
  email: string
  marketingConsent: boolean
  promotionConsent: boolean
}

//회원가입 아이디 중복체크 요청
export interface IfSignUpIdDuplicationCheckRequest {
  userId: string
}

//비밀번호 바꾸기
export interface IfPasswordPatch {
  oldPassword: string
  newPassword: string
}
