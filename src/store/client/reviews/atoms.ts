import {ReviewWriterFormProps} from '@pages/reviews/review-writer/types/review-writer.interface'
import {atom} from 'recoil'

export const test = atom({
  key: 'test',
  default: '',
})

export const reviewWriteFormAtom = atom<ReviewWriterFormProps>({
  key: 'reviewWriteFormAtom',
  default: {
    perfumeId: 1,
    dayType: '',
    strength: 'LIGHT',
    season: '',
    duration: '50%',
    shortReview: '',
    fullReview: '',
    keywords: [],
    thumbnails: [],
  },
})
