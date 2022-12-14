// import hasUndefinedProperties from '../../utils/hasUndefinedProperties'
import mergeArrays from '../../utils/mergeArrays'

const getAbsences = (state: any): any => {
  return state.absences
}

/**
 * Get members absences state
 * @param state redux store
 * @returns members absences loading status and list
 */
export const getMembersAbsences = (state: any): any => {
  const absences = state.absences
  const members = state.members

  // Check for null status (initial state)
  if (absences.status === null || members.status === null) {
    return {
      status: null
    }
  }

  // Check loading status
  if (absences.status === 'Loading' || members.status === 'Loading') {
    return {
      status: 'Loading'
    }
  }

  // Merge Absences and Members data using userId
  const membersAbsences = mergeArrays(absences.data, members.data, 'userId')

  return {
    status: 'Success',
    data: membersAbsences
  }
}

export default getAbsences
