import { AbsencesActionType } from '../action-types'
import { AbsencesAction } from '../actions/absencesActions'

interface absencesState {
  status: 'Loading' | 'Success' | null
  data: any[] | null
}

export const initialState: absencesState = {
  status: null,
  data: []
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const reducer = (state: absencesState = initialState, action: AbsencesAction) => {
  switch (action.type) {
    case AbsencesActionType.LOAD_ALL_ABSENCES:
      return action.payload

    case AbsencesActionType.CLEAR_ALL_ABSENCES:
      return initialState

    default:
      return state
  }
}

export default reducer
