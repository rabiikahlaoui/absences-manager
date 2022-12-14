import Absence from '../../type-defs/absence'
import RequestStatus from '../../type-defs/requestStatus'
import { AbsencesActionType } from '../action-types'
import { AbsencesAction } from '../actions/absencesActions'

export interface AbsencesFilter {
  type: string | null
  date: string | null
}

interface AbsencesState {
  status: RequestStatus | null
  filter: AbsencesFilter
  data: Absence[] | null
}

export const initialState: AbsencesState = {
  status: null,
  filter: {
    type: null,
    date: null
  },
  data: []
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const reducer = (state: AbsencesState = initialState, action: AbsencesAction) => {
  switch (action.type) {
    case AbsencesActionType.LOAD_ALL_ABSENCES:
      return {
        status: action.payload.status,
        data: action.payload.data,
        filter: initialState.filter // Reset filter on load all
      }

    case AbsencesActionType.LOADING_ALL_ABSENCES:
      return {
        ...initialState,
        status: RequestStatus.Loading
      }

    case AbsencesActionType.ERROR_LOADING_ABSENCES:
      return {
        ...initialState,
        status: RequestStatus.Error
      }

    case AbsencesActionType.FILTER_ABSENCES:
      return {
        ...state,
        filter: action.payload
      }

    case AbsencesActionType.CLEAR_ALL_ABSENCES:
      return initialState

    default:
      return state
  }
}

export default reducer
