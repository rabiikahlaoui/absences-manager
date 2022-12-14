import { AxiosResponse } from 'axios'
import api from './http-common'

class MembersDataService {
  async getAll (): Promise<AxiosResponse> {
    return await api.get('/members')
  }
}

export default new MembersDataService()
