import filterArrayByDate from '../../utils/filterArrayByDate'
import mergeArrays from '../../utils/mergeArrays'

/**
 * Get all absences
 * @param state redux store
 * @returns absences state
 */
const getAbsences = (state: any): any => {
  return state.absences
}

/**
 * Get absences filter
 * @param state redux store
 * @returns absences filter data
 */
export const getAbsencesFilter = (state: any): any => {
  return state.absences.filter
}

/**
 * Get members absences state
 * @param state redux store
 * @returns members absences loading status and list
 */
export const getMembersAbsences = (state: any): any => {
  const absences = { ...state.absences }
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

  // Apply filter by date
  if (absences.filter.date !== null) {
    absences.data = absences.data.filter((item: any) => (
      filterArrayByDate(item.startDate, item.endDate, absences.filter.date)
    ))
  }

  // Apply filter by type
  if (absences.filter.type !== null) {
    absences.data = absences.data.filter((item: any) => (
      absences.filter.type === 'allAbsences' ? true : item.type === absences.filter.type
    ))
  }

  // Merge Absences and Members data using userId
  let membersAbsences = mergeArrays(absences.data, members.data, 'userId')

  // Fill absence status
  membersAbsences = membersAbsences.map((item: any) => ({
    ...item,
    status: item.confirmedAt === null
      ? item.rejectedAt === null
        ? 'Requested'
        : 'Rejected'
      : 'Confirmed'
  }))

  return {
    status: 'Success',
    data: membersAbsences
  }
}

export default getAbsences
