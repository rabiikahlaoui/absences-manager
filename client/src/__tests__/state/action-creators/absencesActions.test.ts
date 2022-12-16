import { baseUrl } from './../../../api/api-config';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'

// Redux components
import { AbsencesActionType } from '../../../state/action-types'
import { loadAbsences, clearAbsences } from '../../../state/action-creators/absencesActionCreators'
import { initialState } from '../../../state/reducers/absencesReducer'

// Mock Data
import absences from '../../../__mocks__/absences'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

// Mock axios
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Absences action creators', () => {
  describe('loadAbsences action creator', () => {
    it('should dispatch loading status and success status', async () => {
      // Initialize mockstore with empty state
      const store = mockStore(initialState)

      // Mock axios response
      mockedAxios.get.mockResolvedValue({
        data: {
          message: 'Success',
          payload: absences
        }
      })

      // Dispatch the action
      await store.dispatch<any>(loadAbsences())

      // Test if your store dispatched the expected actions
      const actions = store.getActions()
      const expectedPayload = [
        {
          type: AbsencesActionType.LOADING_ALL_ABSENCES
        },
        {
          type: AbsencesActionType.LOAD_ALL_ABSENCES,
          payload: {
            status: 'Success',
            data: absences
          }
        }
      ]

      expect(mockedAxios.get).toHaveBeenCalledTimes(1)
      expect(mockedAxios.get).toHaveBeenCalledWith(`${baseUrl}/absences`)
      expect(actions).toEqual(expectedPayload)
    })
  }) // loadAbsences action creator

  describe('clearAbsences action creator', () => {
    it('should dispatch loading status and success status', () => {
      // Initialize mockstore with empty state
      const store = mockStore(initialState)

      // Dispatch the action
      store.dispatch<any>(clearAbsences())

      // Test if your store dispatched the expected actions
      const actions = store.getActions()
      const expectedPayload = [
        {
          type: AbsencesActionType.CLEAR_ALL_ABSENCES
        }
      ]

      expect(actions).toEqual(expectedPayload)
    })
  }) // loadAbsences action creator
}) // Absences action creators
