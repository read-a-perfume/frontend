export interface InformationProps {
  isLoading?: boolean
  graphData: graphDataType
}

type DayTypeType = {
  DAILY: number
  REST: number
  SPECIAL: number
  TRAVEL: number
}

type DurationType = {
  LONG: number
  MEDIUM: number
  SHORT: number
  TOO_SHORT: number
}

type SeasonType = {
  FALL: number
  SPRING: number
  SUMMER: number
  WINTER: number
}

type SexType = {
  FEMALE: number
  MALE: number
  OTHER: number
}

type StrengthType = {
  HEAVY: number
  LIGHT: number
  MODERATE: number
}

export type graphDataType = {
  dayType: DayTypeType
  duration: DurationType
  season: SeasonType
  sex: SexType
  strength: StrengthType
}
