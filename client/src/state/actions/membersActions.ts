import Member from '../../type-defs/member'
import { MembersActionType } from '../action-types'

type loadMembersAction = {
  type: MembersActionType.LOAD_ALL_MEMBERS
  payload: {
    status: string | null,
    data: Member[] | null
  }
}

type clearMembersAction = {
  type: MembersActionType.CLEAR_ALL_MEMBERS
}

export type MembersAction = loadMembersAction | clearMembersAction
