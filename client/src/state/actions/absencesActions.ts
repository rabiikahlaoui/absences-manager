import { AbsencesActionType } from '../action-types'

type loadAbsencesAction = {
  type: AbsencesActionType.LOAD_ALL_ABSENCES
  payload: {
    status: string | null,
    data: any[] | null
  }
}

type filterAbsencesAction = {
  type: AbsencesActionType.FILTER_ABSENCES,
  payload: any
}

type clearAbsencesAction = {
  type: AbsencesActionType.CLEAR_ALL_ABSENCES
}

export type AbsencesAction = loadAbsencesAction | clearAbsencesAction | filterAbsencesAction
