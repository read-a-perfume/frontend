import {IfPerfume} from 'types/perfume.interface'

export interface IfPerfumeListProps {
  perfumeListData: IfPerfume[]
}

export interface IfPerfumeCardProps {
  data: IfPerfume
}

export interface IfPerfumeCardTextProps {
  category: string
  value: string
}
