import instance from '@api/instance'
import {AxiosResponse} from 'axios'
import {IfBrandListResponse} from 'types/brand.interface'

export const fetchBrand = async (id: string): Promise<IfBrandListResponse> => {
  try {
    const res: AxiosResponse<IfBrandListResponse> = await instance.get(
      `/brands/${id}`,
    )
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}
