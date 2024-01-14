interface EachDataType {
  name: string
  url: string
}

export const topData: EachDataType[] = [
  {name: '홈', url: '/'},
  {name: '리뷰', url: '/reviews'},
  {name: '브랜드', url: '/brands'},
  {name: '제품', url: '/perfumes'},
]

export const bottomData: EachDataType[] = [
  {name: '회사소개', url: '/'},
  {name: '이용약관', url: '/'},
  {name: '개인정보처리방침', url: '/'},
  {name: '이용안내', url: '/'},
]
