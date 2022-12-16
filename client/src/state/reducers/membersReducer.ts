import Member from '../../type-defs/member'
import RequestStatus from '../../type-defs/requestStatus'
import { MembersActionType } from '../action-types'
import { MembersAction } from '../actions/membersActions'

export interface MembersState {
  status: RequestStatus | null
  data: Member[] | null
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

    case MembersActionType.LOADING_ALL_MEMBERS:
      return {
        ...initialState,
        status: RequestStatus.Loading
      }

    case MembersActionType.ERROR_LOADING_MEMBERS:
      return {
        ...initialState,
        status: RequestStatus.Error
      }

    case MembersActionType.CLEAR_ALL_MEMBERS:
      return initialState

    default:
      return state
  }
}

export default reducer
