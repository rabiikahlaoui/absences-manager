import axios, { AxiosResponse } from 'axios'
import { baseUrl } from './api-config'

class MembersDataService {
  async getAll (): Promise<AxiosResponse> {
    return await axios.get(`${baseUrl}/members`)
  }
}

export default new MembersDataService()
