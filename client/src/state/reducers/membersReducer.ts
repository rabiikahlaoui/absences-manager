import { MembersActionType } from '../action-types'
import { MembersAction } from '../actions/membersActions'

interface membersState {
  status: 'Loading' | 'Success' | null
  data: any[] | null
}

export const initialState: membersState = {
  status: null,
  data: []
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const reducer = (state: membersState = initialState, action: MembersAction) => {
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
