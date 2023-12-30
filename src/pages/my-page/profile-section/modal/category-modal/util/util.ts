import {IfCategory} from 'types/perfume.interface'

type StateType =
  | (IfCategory & {
      select: boolean
    })[]
  | undefined

type SetStateType = React.Dispatch<
  React.SetStateAction<
    | (IfCategory & {
        select: boolean
      })[]
    | undefined
  >
>

export const getTypeWithId = (id: number, data: StateType) => {
  const tmp = data?.filter(e => e.id === id)
  return tmp !== undefined && tmp.length > 0 ? tmp[0] : undefined
}

export const changeTypeWithId = (
  id: number,
  data: StateType,
  setState: SetStateType,
) => {
  if (data !== undefined) {
    const newData = data.map(e => (e.id === id ? {...e, select: !e.select} : e))
    if (newData.reduce((cnt: number, e) => (e.select ? cnt + 1 : cnt), 0) > 3) {
      alert('타입은 최대 3개 선택 가능합니다.')
    } else {
      setState(newData)
    }
  }
}

export const initType = (data:StateType,setState:SetStateType) => {
    if (data !== undefined) {
        setState(data.map(e=>({...e,select:false})))
    }
}