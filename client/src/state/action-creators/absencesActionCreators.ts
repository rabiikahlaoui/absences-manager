import { Dispatch } from 'redux'
import { AbsencesActionType } from '../action-types'
import { AbsencesAction } from '../actions/absencesActions'

import absencesService from '../../services/absences.service'

/**
 * Action to dispatch when absences are loading
 */
const absencesLoadingStatusAction = (): AbsencesAction => ({
  type: AbsencesActionType.LOAD_ALL_ABSENCES,
  payload: { status: 'Loading', data: null }
})

/**
 * Action to dispatch to load absences into the store
 * @absences absences list
 */
const absencesLoadedAction = (absences: any[]): AbsencesAction => ({
  type: AbsencesActionType.LOAD_ALL_ABSENCES,
  payload: { status: 'Success', data: absences }
})

/**
 * Action to dispatch to clear absences from the store
 */
const clearAbsencesAction = (): AbsencesAction => ({
  type: AbsencesActionType.CLEAR_ALL_ABSENCES
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
export const clearAbsences = () => (dispatch: Dispatch<AbsencesAction>) => {
  dispatch(clearAbsencesAction())
}
