import {AxiosResponse} from 'axios'
import {IfBrandListResponse} from 'types/brand.interface'
import instance from '@api/instance'

export const fetchBrands = async (): Promise<IfBrandListResponse[]> => {
  try {
    const res: AxiosResponse<IfBrandListResponse[]> = await instance.get(
      `/brands`,
    )
    return res.data
  } catch (error: any) {
    console.log('brands',error)
    throw error
  }
}
