import Absence from '../../type-defs/absence'
import { AbsencesActionType } from '../action-types'
import { AbsencesFilter } from '../reducers/absencesReducer'

type loadAbsencesAction = {
  type: AbsencesActionType.LOAD_ALL_ABSENCES
  payload: {
    status: string | null,
    data: Absence[] | null
  }
}

type filterAbsencesAction = {
  type: AbsencesActionType.FILTER_ABSENCES,
  payload: AbsencesFilter
}

type clearAbsencesAction = {
  type: AbsencesActionType.CLEAR_ALL_ABSENCES
}

export type AbsencesAction = loadAbsencesAction | clearAbsencesAction | filterAbsencesAction
