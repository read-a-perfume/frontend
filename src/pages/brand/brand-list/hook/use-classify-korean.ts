import {useMemo} from 'react'
import {IfBrandListResponse} from 'types/brand.interface'

const FIRST: string[] = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
] // 초성으로 오는 모든 글자
const FIRST_CONVERT: object = {
  ㄱ: 'ㄱ',
  ㄲ: 'ㄱ',
  ㄴ: 'ㄴ',
  ㄷ: 'ㄷ',
  ㄸ: 'ㄷ',
  ㄹ: 'ㄹ',
  ㅁ: 'ㅁ',
  ㅂ: 'ㅂ',
  ㅃ: 'ㅂ',
  ㅅ: 'ㅅ',
  ㅆ: 'ㅅ',
  ㅇ: 'ㅇ',
  ㅈ: 'ㅈ',
  ㅉ: 'ㅉ',
  ㅊ: 'ㅊ',
  ㅋ: 'ㅋ',
  ㅌ: 'ㅌ',
  ㅍ: 'ㅍ',
  ㅎ: 'ㅎ',
} // 쌍자음 처리
const KOR_START: number = 44032 // 한국어 시작 유니코드

const getFirstKorString = (str: string): string => {
  const unicode = str.charCodeAt(0) - KOR_START
  const first = FIRST[Math.floor(unicode / 588)]
  if (!(first in FIRST_CONVERT)) {
    return '기타'
  }
  return FIRST_CONVERT[first]
}

export interface KorClassifyType {
  ㄱ: IfBrandListResponse[]
  ㄴ: IfBrandListResponse[]
  ㄷ: IfBrandListResponse[]
  ㄹ: IfBrandListResponse[]
  ㅁ: IfBrandListResponse[]
  ㅂ: IfBrandListResponse[]
  ㅅ: IfBrandListResponse[]
  ㅇ: IfBrandListResponse[]
  ㅈ: IfBrandListResponse[]
  ㅊ: IfBrandListResponse[]
  ㅋ: IfBrandListResponse[]
  ㅌ: IfBrandListResponse[]
  ㅍ: IfBrandListResponse[]
  ㅎ: IfBrandListResponse[]
  기타: IfBrandListResponse[]
}

const classifyKorean = (data: IfBrandListResponse[] | undefined) => {
  const result: KorClassifyType = {
    ㄱ: [],
    ㄴ: [],
    ㄷ: [],
    ㄹ: [],
    ㅁ: [],
    ㅂ: [],
    ㅅ: [],
    ㅇ: [],
    ㅈ: [],
    ㅊ: [],
    ㅋ: [],
    ㅌ: [],
    ㅍ: [],
    ㅎ: [],
    기타: [],
  }
  if (data === undefined) {
    return result
  }
  for (let i = 0; i < data.length; i++) {
    const name = data[i].name

    result[getFirstKorString(name)].push(data[i])
  }
  return result
}

const useClassifyKorean = (data: IfBrandListResponse[] | undefined) => {
  return useMemo(() => classifyKorean(data), [data])
}

export default useClassifyKorean
