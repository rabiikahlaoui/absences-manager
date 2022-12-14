import filterArrayByDate from '../../utils/filterArrayByDate'
import mergeArrays from '../../utils/mergeArrays'

// TODO: make it a global config
const absencesPerPage = 10

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
 * Get absences pagination
 * @param state redux store
 * @returns absences pagination data
 */
export const getAbsencesPagination = (state: any): any => {
  return state.absences.pagination
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

  // Apply pagination
  if (absences.pagination.currentPage !== null) {
    const currentPage = absences.pagination.currentPage

    absences.data = absences.data.slice((currentPage - 1) * absencesPerPage, currentPage * absencesPerPage)
  }

  // Merge Absences and Members data using userId
  const membersAbsences = mergeArrays(absences.data, members.data, 'userId')

  return {
    status: 'Success',
    data: membersAbsences
  }
}

export default getAbsences
