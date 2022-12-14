import State from "../reducers"
import Member from "../../type-defs/member"

const getMembers = (state: any): Member[] => {
  return state.members
}

export default getMembers
