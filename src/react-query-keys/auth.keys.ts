export const authQueryKeys = {
  userProfile: ['userProfile'],
}

export const authMutationKeys = {
  signIn: ['login'],
  signUp: ['signup-eail'],
  signUpIdCheck: (id: string) => [`signup-check-username`, id],
  emailDuplicateCheck: (email: string) => [`emailDuplicateCheck`, email],
  emailAuthCodeConfirm: (emailCode: string) => [`emailAuthCodeConfirm`, emailCode],
  logout: ['logout'],
}
