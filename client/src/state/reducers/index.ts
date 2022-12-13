import { combineReducers } from 'redux'
import AbsencesReducer from './absencesReducer'

const reducers = combineReducers({
  absences: AbsencesReducer
})

export default reducers

export type State = ReturnType<typeof reducers>
