import { AbsencesActionType } from '../action-types/absencesActionType'

type loadAbsencesAction = {
  type: AbsencesActionType.LOAD_ALL_ABSENSES
  payload: {
    status: string | null,
    data: any[] | null
  }
}

type clearAbsencesAction = {
  type: AbsencesActionType.CLEAR_ALL_ABSENSES
}

export type AbsencesAction = loadAbsencesAction | clearAbsencesAction
