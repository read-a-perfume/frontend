export interface ReviewWriterFormProps {
  perfumeId: any // 향수아이디
  dayType: string // 어떤 날에 뿌리나요?
  strength: string // // 확산력
  season: string // 어떤 계절이랑 잘어울리는지
  duration: number // 지속력
  shortReview: string // 한줄 평
  feeling: string // 이 향수는 어떤느낌을 주나요 텍스트에리어
  tags: string[]
  files: string[]
}
