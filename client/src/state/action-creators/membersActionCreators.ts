import { Dispatch } from 'redux'
import { MembersActionType } from '../action-types'
import { MembersAction } from '../actions/membersActions'

import membersService from '../../services/members.service'
import Member from '../../type-defs/member'
import RequestStatus from '../../type-defs/requestStatus'

/**
 * Action to dispatch when members are loading
 */
const membersLoadingStatusAction = (): MembersAction => ({
  type: MembersActionType.LOADING_ALL_MEMBERS
})

/**
 * Action to dispatch when error occurs while loading members
 */
const membersErrorLoadingAction = (): MembersAction => ({
  type: MembersActionType.ERROR_LOADING_MEMBERS
})

/**
 * Action to dispatch to load members into the store
 * @members members list
 */
const membersLoadedAction = (members: Member[]): MembersAction => ({
  type: MembersActionType.LOAD_ALL_MEMBERS,
  payload: { status: RequestStatus.Success, data: members }
})

/**
 * Action to dispatch to clear members from the store
 */
const clearMembersAction = (): MembersAction => ({
  type: MembersActionType.CLEAR_ALL_MEMBERS
})

/**
 * Load members
 */
export const loadMembers = () => async (dispatch: Dispatch<MembersAction>) => {
  // Dispatch loading action
  dispatch(membersLoadingStatusAction())

  try {
    const members = await membersService.getAll()

    if (members.data.message === RequestStatus.Success) {
      // Dispatch response data
      dispatch(membersLoadedAction(members.data.payload))
    } else {
      dispatch(membersErrorLoadingAction())
    }
  } catch (err) {
    dispatch(membersErrorLoadingAction())
  }
}

/**
 * Clear members
 */
export const clearMembers = () => (dispatch: Dispatch<MembersAction>) => {
  dispatch(clearMembersAction())
}
