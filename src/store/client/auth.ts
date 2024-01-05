import {atom} from 'recoil'
import {IfSignUpAtom} from './types/auth.interface'

export const UserProfileAtom = atom<any | null>({
  key: 'user-atom',
  default: null,
})

export const SignUpAtoms = atom<IfSignUpAtom>({
  key: 'sign-up',
  default: {
    isEmailSenderCheck: false,
    isEmailAuthCodeCheck: false,
    isUserNameCheck: false,
  },
})
