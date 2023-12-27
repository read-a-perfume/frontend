import instance from '@api/instance'
import {AxiosResponse} from 'axios'
import {IfBrandListResponse} from 'types/brand.interface'
import {IfPerfume} from 'types/perfume.interface'

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

export const fetchBrandPerfumes = async (
  id: string,
  lastPerfumeId: '',
): Promise<{content: IfPerfume[]; hasNext: boolean}> => {
  try {
    const res: AxiosResponse<{content: IfPerfume[]; hasNext: boolean}> =
      await instance.get(`/perfumes`, {
        params: {
          sort: 'brand',
          brandId: id,
          lastPerfumeId: lastPerfumeId,
          pageSize: 1000,
        },
      })
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}
