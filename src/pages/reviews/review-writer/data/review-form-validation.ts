// 각 리뷰작성에 필요한 유효성 검사를 추상화 해놓음.

const reviwFormValidation = {
  dayType: {
    validate: (item: string) => {
      return item.length !== 0 || '데일리를 선택해주세요'
    },
  },
  duration: {
    validate: (item: string) => {
      console.log(item, 'item')
      return item.length !== 0 || '지속력을 선택해주세요'
    },
  },
  keywords: {
    validate: (item: number[] | []) => {
      return item.length <= 3 || '(최대 3개).'
    },
  },
  perfume: {
    validate: (item: {id: number; name: string}) => {
      console.log(item, '이름')
      return item.id !== 0 || '향수를 선택해주세요'
    },
  },
  season: {
    validate: item => {
      return item.length !== 0 || '계절을 선택해주세요'
    },
  },
  shortReview: {
    minLength: {
      value: 5,
      message: '최소 5자는 작성부탁드립니다.',
    },
    maxLength: {
      value: 20,
      message: '최대 20자까지만 가능합니다',
    },
  },
  fullReview: {
    minLength: {
      value: 20,
      message: '최소 20자는 작성부탁드립니다.',
    },
    maxLength: {
      value: 150,
      message: '최대 150자까지만 가능합니다',
    },
  },
}

export default reviwFormValidation
