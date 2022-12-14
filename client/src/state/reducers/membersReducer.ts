import { MembersActionType } from '../action-types'
import { MembersAction } from '../actions/membersActions'

interface MembersState {
  status: 'Loading' | 'Success' | null
  data: any[] | null
}

export const initialState: MembersState = {
  status: null,
  data: []
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const reducer = (state: MembersState = initialState, action: MembersAction) => {
  switch (action.type) {
    case MembersActionType.LOAD_ALL_MEMBERS:
      return action.payload

    case MembersActionType.CLEAR_ALL_MEMBERS:
      return initialState

    default:
      return state
  }
}

export default reducer
