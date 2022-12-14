import { Dispatch } from 'redux'
import { AbsencesActionType } from '../action-types'
import { AbsencesAction } from '../actions/absencesActions'

import absencesService from '../../services/absences.service'
import Absence from '../../type-defs/absence'
import { AbsencesFilter } from '../reducers/absencesReducer'
import RequestStatus from '../../type-defs/requestStatus'

/**
 * Action to dispatch when absences are loading
 */
const absencesLoadingStatusAction = (): AbsencesAction => ({
  type: AbsencesActionType.LOADING_ALL_ABSENCES
})

/**
 * Action to dispatch when error occurs while loading absences
 */
const absencesErrorLoadingAction = (): AbsencesAction => ({
  type: AbsencesActionType.ERROR_LOADING_ABSENCES
})

/**
 * Action to dispatch to load absences into the store
 * @absences absences list
 */
const absencesLoadedAction = (absences: Absence[]): AbsencesAction => ({
  type: AbsencesActionType.LOAD_ALL_ABSENCES,
  payload: { status: RequestStatus.Success, data: absences }
})

/**
 * Action to dispatch to clear absences from the store
 */
const clearAbsencesAction = (): AbsencesAction => ({
  type: AbsencesActionType.CLEAR_ALL_ABSENCES
})

/**
 * Action to dispatch to update the filter
 * @filterData absences filter data
 */
const filterAbsencesAction = (filterData: AbsencesFilter): AbsencesAction => ({
  type: AbsencesActionType.FILTER_ABSENCES,
  payload: filterData
})

/**
 * Load absences
 */
export const loadAbsences = () => async (dispatch: Dispatch<AbsencesAction>) => {
  // Dispatch loading action
  dispatch(absencesLoadingStatusAction())

  try {
    const absences = await absencesService.getAll()

    if (absences.data.message === RequestStatus.Success) {
      // Dispatch response data
      dispatch(absencesLoadedAction(absences.data.payload))
    } else {
      dispatch(absencesErrorLoadingAction())
    }
  } catch (err) {
    dispatch(absencesErrorLoadingAction())
  }
}

/**
 * Clear absences
 */
export const clearAbsences = () => (dispatch: Dispatch<AbsencesAction>) => {
  dispatch(clearAbsencesAction())
}

/**
 * Filter absences
 * @filterData filter data
 */
export const filterAbsences = (filterData: AbsencesFilter) => async (dispatch: Dispatch<AbsencesAction>) => {
  dispatch(filterAbsencesAction(filterData))
}
