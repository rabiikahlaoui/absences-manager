import { combineReducers } from 'redux'
import AbsencesReducer from './absencesReducer'
import MembersReducer from './membersReducer'

const reducers = combineReducers({
  absences: AbsencesReducer,
  members: MembersReducer
})

export default reducers

export type State = ReturnType<typeof reducers>
