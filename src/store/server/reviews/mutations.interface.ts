export interface ReviewCreate {
  perfumeId: number
  season: string
  dayType: string
  strength: string
  duration: number
  feeling: string
  shortReview: string
  tags: number[]
}
