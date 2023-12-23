import {ReviewWriterFormProps} from '@pages/reviews/review-writer/types/review-writer.interface'
import {atom} from 'recoil'

export const test = atom({
  key: 'test',
  default: '',
})

export const reviewWriteFormAtom = atom<ReviewWriterFormProps>({
  key: 'reviewWriteFormAtom',
  default: {
    perfume: {
      id: 0,
      name: '',
    },
    dayType: '',
    strength: 'LIGHT',
    season: '',
    duration: '',
    shortReview: '',
    fullReview: '',
    keywords: [],
    thumbnails: [],
  },
})
