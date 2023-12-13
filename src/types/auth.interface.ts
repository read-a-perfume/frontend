// 로그인
export interface IfLogin {
  username: string
  password: string
}

//로그인 중인 유저 프로필 조회

export interface IfLoginUserProfile extends IfLogin {
  thumbnail: string
}

//회원가입 요청
export interface IfSignUp extends IfLogin {
  email: string
  marketingConsent: boolean
  promotionConsent: boolean
}

//회원가입 아이디 중복체크 요청
export interface IfSignUpIdDuplicationCheck {
  userId: string
}
