import Absence from '../../type-defs/absence'
import RequestStatus from '../../type-defs/requestStatus'
import { AbsencesActionType } from '../action-types'
import { AbsencesFilter } from '../reducers/absencesReducer'

type loadAbsencesAction = {
  type: AbsencesActionType.LOAD_ALL_ABSENCES
  payload: {
    status: RequestStatus | null,
    data: Absence[] | null
  }
}

type loadingAbsencesAction = {
  type: AbsencesActionType.LOADING_ALL_ABSENCES
}

type errorLoadingAbsencesAction = {
  type: AbsencesActionType.ERROR_LOADING_ABSENCES
}

type filterAbsencesAction = {
  type: AbsencesActionType.FILTER_ABSENCES,
  payload: AbsencesFilter
}

type clearAbsencesAction = {
  type: AbsencesActionType.CLEAR_ALL_ABSENCES
}

export type AbsencesAction = loadAbsencesAction | loadingAbsencesAction | errorLoadingAbsencesAction | clearAbsencesAction | filterAbsencesAction
