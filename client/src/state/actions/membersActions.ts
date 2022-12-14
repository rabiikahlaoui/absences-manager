import Member from '../../type-defs/member'
import { MembersActionType } from '../action-types'

type loadMembersAction = {
  type: MembersActionType.LOAD_ALL_MEMBERS
  payload: {
    status: string | null,
    data: Member[] | null
  }
}

type loadingMembersAction = {
  type: MembersActionType.LOADING_ALL_MEMBERS
}

type errorLoadingMembersAction = {
  type: MembersActionType.ERROR_LOADING_MEMBERS
}

type clearMembersAction = {
  type: MembersActionType.CLEAR_ALL_MEMBERS
}

export type MembersAction = loadMembersAction | clearMembersAction | loadingMembersAction | errorLoadingMembersAction
