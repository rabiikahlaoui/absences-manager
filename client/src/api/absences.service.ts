import axios, { AxiosResponse } from 'axios'
import { baseUrl } from './api-config'

class AbsencesDataService {
  async getAll (): Promise<AxiosResponse> {
    return await axios.get(`${baseUrl}/absences`)
  }
}

export default new AbsencesDataService()
