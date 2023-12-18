export interface IfInformationProps {
  isLoading?: boolean
  graphData: IfGraphDataType
}

export interface IfGraphDataType {
  dayType: DayTypeType
  duration: DurationType
  season: SeasonType
  sex: SexType
  strength: StrengthType
}

interface DayTypeType {
  DAILY: number
  REST: number
  SPECIAL: number
  TRAVEL: number
}

interface DurationType {
  LONG: number
  MEDIUM: number
  SHORT: number
  TOO_SHORT: number
}

interface SeasonType {
  FALL: number
  SPRING: number
  SUMMER: number
  WINTER: number
}

interface SexType {
  FEMALE: number
  MALE: number
  OTHER: number
}

interface StrengthType {
  HEAVY: number
  LIGHT: number
  MODERATE: number
}
