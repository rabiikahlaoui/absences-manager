import RequestStatus from '../../../type-defs/requestStatus'

// Redux components
import reducer, { initialState, AbsencesState } from '../../../state/reducers/absencesReducer'
import { AbsencesActionType } from '../../../state/action-types'
import { AbsencesAction } from './../../../state/actions/absencesActions'

// Mock Data
import absences from '../../../__mocks__/absences'
import Absence from '../../../type-defs/absence'

describe('Absences reducer', () => {
  it('should handle load all absences', () => {
    const dispatchedAction: AbsencesAction = {
      type: AbsencesActionType.LOAD_ALL_ABSENCES,
      payload: {
        status: RequestStatus.Success,
        data: (absences as Absence[])
      }
    }

    const expectedState = {
      status: RequestStatus.Success,
      filter: { type: null, date: null },
      data: absences
    }

    expect(reducer(initialState, dispatchedAction)).toEqual(expectedState)
  }) // load all absences

  it('should handle loading absences', () => {
    const dispatchedAction: AbsencesAction = {
      type: AbsencesActionType.LOADING_ALL_ABSENCES
    }

    const expectedState = {
      status: RequestStatus.Loading,
      filter: { type: null, date: null },
      data: []
    }

    expect(reducer(initialState, dispatchedAction)).toEqual(expectedState)
  }) // loading absences

  it('should handle error while loading absences', () => {
    const expectedState = {
      status: RequestStatus.Error,
      filter: { type: null, date: null },
      data: []
    }

    const dispatchedAction: AbsencesAction = {
      type: AbsencesActionType.ERROR_LOADING_ABSENCES
    }

    expect(reducer(initialState, dispatchedAction)).toEqual(expectedState)
  }) // error loading absences

  it('should handle filter absences', () => {
    const filterData = { type: 'vacation', date: '2021-01-05' }

    const dispatchedAction: AbsencesAction = {
      type: AbsencesActionType.FILTER_ABSENCES,
      payload: filterData
    }

    const expectedState = {
      status: null,
      filter: filterData,
      data: []
    }

    expect(reducer(initialState, dispatchedAction)).toEqual(expectedState)
  }) // filter absences

  it('should handle clear all absences and return the initial state', () => {
    const previousState: AbsencesState = {
      status: RequestStatus.Success,
      filter: { type: null, date: null },
      data: (absences as Absence[])
    }

    const dispatchedAction: AbsencesAction = {
      type: AbsencesActionType.CLEAR_ALL_ABSENCES
    }
    expect(reducer(previousState, dispatchedAction)).toEqual(initialState)
  }) // clear all absences
}) // Absences reducer
