import { AbsencesActionType } from '../action-types'
import { AbsencesAction } from '../actions/absencesActions'

interface AbsencesFilter {
  type: string | null
  date: string | null
}

interface AbsencesState {
  status: 'Loading' | 'Success' | null
  filter: AbsencesFilter
  data: any[] | null
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
        ...state,
        status: action.payload.status,
        data: action.payload.data
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
