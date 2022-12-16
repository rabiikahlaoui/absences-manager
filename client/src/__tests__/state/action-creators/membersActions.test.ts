import { baseUrl } from './../../../api/api-config';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'

// Redux components
import { MembersActionType } from '../../../state/action-types'
import { loadMembers, clearMembers } from '../../../state/action-creators/membersActionCreators'
import { initialState } from '../../../state/reducers/membersReducer'

// Mock Data
import members from '../../../__mocks__/members'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

// Mock axios
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Members action creators', () => {
  describe('loadMembers action creator', () => {
    it('should dispatch loading status and success status', async () => {
      // Initialize mockstore with empty state
      const store = mockStore(initialState)

      // Mock axios response
      mockedAxios.get.mockResolvedValue({
        data: {
          message: 'Success',
          payload: members
        }
      })

      // Dispatch the action
      await store.dispatch<any>(loadMembers())

      // Test if your store dispatched the expected actions
      const actions = store.getActions()
      const expectedPayload = [
        {
          type: MembersActionType.LOADING_ALL_MEMBERS
        },
        {
          type: MembersActionType.LOAD_ALL_MEMBERS,
          payload: {
            status: 'Success',
            data: members
          }
        }
      ]

      expect(mockedAxios.get).toHaveBeenCalledTimes(1)
      expect(mockedAxios.get).toHaveBeenCalledWith(`${baseUrl}/members`)
      expect(actions).toEqual(expectedPayload)
    })
  }) // loadMembers action creator

  describe('clearMembers action creator', () => {
    it('should dispatch loading status and success status', () => {
      // Initialize mockstore with empty state
      const store = mockStore(initialState)

      // Dispatch the action
      store.dispatch<any>(clearMembers())

      // Test if your store dispatched the expected actions
      const actions = store.getActions()
      const expectedPayload = [
        {
          type: MembersActionType.CLEAR_ALL_MEMBERS
        }
      ]

      expect(actions).toEqual(expectedPayload)
    })
  }) // loadMembers action creator
}) // Members action creators
