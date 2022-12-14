import { Dispatch } from 'redux'
import { AbsencesActionType } from '../action-types/absencesActionType'
import { AbsencesAction } from '../actions/absencesActions'

import absencesService from '../../services/absences.service'

/**
 * Action to dispatch when absences are loading
 */
const absencesLoadingStatusAction = (): AbsencesAction => ({
  type: AbsencesActionType.LOAD_ALL_ABSENSES,
  payload: { status: 'Loading', data: null }
})

/**
 * Action to dispatch to load absences into the store
 * @absences absences list
 */
const absencesLoadedAction = (absences: any[]): AbsencesAction => ({
  type: AbsencesActionType.LOAD_ALL_ABSENSES,
  payload: { status: 'Success', data: absences }
})

/**
 * Action to dispatch to clear absences from the store
 */
const clearAbsencesAction = (): AbsencesAction => ({
  type: AbsencesActionType.CLEAR_ALL_ABSENSES
})

/**
 * Load absences
 */
export const loadAbsences = () => async (dispatch: Dispatch<AbsencesAction>) => {
  // Dispatch loading action
  dispatch(absencesLoadingStatusAction())

  try {
    const absences = await absencesService.getAll()

    // Dispatch response data
    dispatch(absencesLoadedAction(absences?.data?.payload))
  } catch (err) {
    console.log(err)
  }
}

/**
 * Clear absences
 */
export const clearAbsenses = () => (dispatch: Dispatch<AbsencesAction>) => {
  dispatch(clearAbsencesAction())
}
