export interface IfInformationProps {
  isLoading?: boolean
  graphData: IfGraphDataType
}

export interface IfGraphDataType {
  dayType: IfDayType
  duration: IfDuration
  season: IfSeason
  sex: IfSex
  strength: IfStrength
}

interface IfDayType {
  DAILY: number
  REST: number
  SPECIAL: number
  TRAVEL: number
}

interface IfDuration {
  LONG: number
  MEDIUM: number
  SHORT: number
  TOO_SHORT: number
}

interface IfSeason {
  FALL: number
  SPRING: number
  SUMMER: number
  WINTER: number
}

interface IfSex {
  FEMALE: number
  MALE: number
  OTHER: number
}

interface IfStrength {
  HEAVY: number
  LIGHT: number
  MODERATE: number
}
