import { Dispatch } from 'redux'
import { AbsencesActionType } from '../action-types'
import { AbsencesAction } from '../actions/absencesActions'

import absencesService from '../../services/absences.service'

// TODO: make it a global config
const absencesPerPage = 10

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
 * @pagination absences pagination data
 */
const absencesLoadedAction = (absences: any[], pagination: any): AbsencesAction => ({
  type: AbsencesActionType.LOAD_ALL_ABSENCES,
  payload: { status: 'Success', data: absences, pagination: pagination }
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
const filterAbsencesAction = (filterData: any): AbsencesAction => ({
  type: AbsencesActionType.FILTER_ABSENCES,
  payload: filterData
})

/**
 * Action to dispatch to update the pagination
 * @paginationData absences pagination data
 */
const paginateAbsencesAction = (paginationData: any): AbsencesAction => ({
  type: AbsencesActionType.PAGINATE_ABSENCES,
  payload: paginationData
})

/**
 * Load absences
 */
export const loadAbsences = () => async (dispatch: Dispatch<AbsencesAction>) => {
  // Dispatch loading action
  dispatch(absencesLoadingStatusAction())

  try {
    const absences = await absencesService.getAll()

    const totalAbsences = absences.data.payload.length

    // Pagination data
    const pagination = {
      currentPage: 1,
      totalPages: Math.ceil(totalAbsences / absencesPerPage),
      totalAbsences: totalAbsences
    }

    // Dispatch response data
    dispatch(absencesLoadedAction(absences.data.payload, pagination))
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

/**
 * Filter absences
 * @filterData filter data
 */
export const filterAbsences = (filterData: any) => async (dispatch: Dispatch<AbsencesAction>) => {
  dispatch(filterAbsencesAction(filterData))
}

/**
 * Paginate absences
 * @paginationData pagination data
 */
export const paginateAbsences = (paginationData: any) => async (dispatch: Dispatch<AbsencesAction>) => {
  dispatch(paginateAbsencesAction(paginationData))
}
