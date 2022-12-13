import { Dispatch } from 'redux'
import { AbsencesActionType } from '../action-types/absencesActionType'
import { AbsencesAction } from '../actions/absencesActions'

// TODO: replace with API result
const tempData = [
  { id: 1, memberNote: 'Enjoy your trip', type: 'vacation' },
  { id: 2, memberNote: 'Get well soon', type: 'sickness' }
]

const dispatchLoadingStatus = (dispatch: Dispatch<AbsencesAction>): void => {
  dispatch({
    type: AbsencesActionType.LOAD_ALL_ABSENSES,
    payload: { status: 'Loading', data: null }
  })
}

export const fetchAbsences = () => () => {
  return async (dispatch: Dispatch<AbsencesAction>) => {
    // Dispatch loading action
    dispatchLoadingStatus(dispatch)

    // Dispatch response data
    dispatch({
      type: AbsencesActionType.LOAD_ALL_ABSENSES,
      payload: {
        status: 'Success',
        data: tempData
      }
    })
  }
}

export const clearAbsenses = () => {
  return (dispatch: Dispatch<AbsencesAction>) => {
    dispatch({
      type: AbsencesActionType.CLEAR_ALL_ABSENSES
    })
  }
}
