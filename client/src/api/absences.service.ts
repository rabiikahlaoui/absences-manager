import { AxiosResponse } from 'axios'
import api from './http-common'

class AbsencesDataService {
  async getAll (): Promise<AxiosResponse> {
    return await api.get('/absences')
  }
}

export default new AbsencesDataService()
