import {atom} from 'recoil'

export const UserProfileAtom = atom<any | null>({
  key: 'user-atom',
  default: null,
})
