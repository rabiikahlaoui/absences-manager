import { AbsencesActionType } from '../action-types'

type loadAbsencesAction = {
  type: AbsencesActionType.LOAD_ALL_ABSENCES
  payload: {
    status: string | null,
    data: any[] | null
  }
}

type clearAbsencesAction = {
  type: AbsencesActionType.CLEAR_ALL_ABSENCES
}

export type AbsencesAction = loadAbsencesAction | clearAbsencesAction
