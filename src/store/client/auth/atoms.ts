import {atom} from 'recoil'

export const UserAtom = atom<any | null>({
  key: 'user-atom',
  default: null,
})
