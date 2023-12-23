import instance from '@api/instance'
import {AxiosResponse} from 'axios'
import {IfMe} from 'types/user.interface'

export const fetchCurUser = async (): Promise<IfMe> => {
  try {
    const res: AxiosResponse<IfMe> = await instance.get(`/me`)
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}
