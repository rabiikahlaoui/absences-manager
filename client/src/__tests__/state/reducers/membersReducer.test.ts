import RequestStatus from '../../../type-defs/requestStatus'

// Redux components
import reducer, { initialState, MembersState } from '../../../state/reducers/membersReducer'
import { MembersActionType } from '../../../state/action-types'
import { MembersAction } from '../../../state/actions/membersActions'

// Mock Data
import members from '../../../__mocks__/members'
import Member from '../../../type-defs/member'

describe('Members reducer', () => {
  it('should handle load all members', () => {
    const dispatchedAction: MembersAction = {
      type: MembersActionType.LOAD_ALL_MEMBERS,
      payload: {
        status: RequestStatus.Success,
        data: (members as unknown as Member[])
      }
    }

    const expectedState = {
      status: RequestStatus.Success,
      data: members
    }

    expect(reducer(initialState, dispatchedAction)).toEqual(expectedState)
  }) // load all members

  it('should handle loading members', () => {
    const dispatchedAction: MembersAction = {
      type: MembersActionType.LOADING_ALL_MEMBERS
    }

    const expectedState = {
      status: RequestStatus.Loading,
      data: []
    }

    expect(reducer(initialState, dispatchedAction)).toEqual(expectedState)
  }) // loading members

  it('should handle error while loading members', () => {
    const expectedState = {
      status: RequestStatus.Error,
      data: []
    }

    const dispatchedAction: MembersAction = {
      type: MembersActionType.ERROR_LOADING_MEMBERS
    }

    expect(reducer(initialState, dispatchedAction)).toEqual(expectedState)
  }) // error loading members

  it('should handle clear all members and return the initial state', () => {
    const previousState: MembersState = {
      status: RequestStatus.Success,
      data: (members as unknown as Member[])
    }

    const dispatchedAction: MembersAction = {
      type: MembersActionType.CLEAR_ALL_MEMBERS
    }
    expect(reducer(previousState, dispatchedAction)).toEqual(initialState)
  }) // clear all members
}) // Members reducer
