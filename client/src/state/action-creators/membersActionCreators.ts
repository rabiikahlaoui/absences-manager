import { Dispatch } from 'redux'
import { MembersActionType } from '../action-types'
import { MembersAction } from '../actions/membersActions'

import membersService from '../../services/members.service'

/**
 * Action to dispatch when members are loading
 */
const membersLoadingStatusAction = (): MembersAction => ({
  type: MembersActionType.LOAD_ALL_MEMBERS,
  payload: { status: 'Loading', data: null }
})

/**
 * Action to dispatch to load members into the store
 * @members members list
 */
const membersLoadedAction = (members: any[]): MembersAction => ({
  type: MembersActionType.LOAD_ALL_MEMBERS,
  payload: { status: 'Success', data: members }
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

    // Dispatch response data
    dispatch(membersLoadedAction(members?.data?.payload))
  } catch (err) {
    console.log(err)
  }
}

/**
 * Clear members
 */
export const clearMembers = () => (dispatch: Dispatch<MembersAction>) => {
  dispatch(clearMembersAction())
}
