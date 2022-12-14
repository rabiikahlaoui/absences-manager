import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Alert, Loader } from '../../components'
import { absencesActionCreators, membersActionCreators } from '../../state'
import { getMembersAbsences } from '../../state/selectors/absencesSelectors'
import RequestStatus from '../../type-defs/requestStatus'
import { AbsencesFilter, AbsencesList, AbsencesPaginator } from '.'

// For pagination filter
interface Pagination {
  currentPage: number
  totalPages: number
}

// For array slice method
interface Paginate {
  from: number
  to: number
}

const itemsPerPage = 10

const AbsencePage: React.FC = () => {
  const [pagination, setPagination] = useState<Pagination>({ currentPage: 0, totalPages: 0 })
  const dispatch = useDispatch<any>()
  const membersAbsences = useSelector(getMembersAbsences)

  // Dispatch load absences on component mount
  useEffect(() => {
    dispatch(absencesActionCreators.loadAbsences())
    dispatch(membersActionCreators.loadMembers())
  }, [])

  // Dispatch clear absences on component unmount
  useEffect(() => () => {
    absencesActionCreators.clearAbsences()
    membersActionCreators.clearMembers()
  }, [])

  // Reset current page on absences list change
  useEffect(() => () => {
    setPagination({ ...pagination, currentPage: 1 })
  }, [membersAbsences])

  // Calculate total pages
  const calculateTotalPages = (absencesLength: number): number => {
    return Math.ceil(membersAbsences.data.length / 10)
  }

  // Set pagination page
  const setPage = (currentPage: number): void => {
    setPagination({ ...pagination, currentPage })
  }

  // Calculate current page and next page indexes
  const paginate = (currentPage: number): Paginate => {
    return {
      from: (currentPage - 1) * itemsPerPage,
      to: currentPage * itemsPerPage
    }
  }

  // Handle loading in initial state and loading status
  if ([RequestStatus.Loading, null].includes(membersAbsences.status)) {
    return <Loader />
  }

  // Handle error
  if (membersAbsences.status === RequestStatus.Error || !Array.isArray(membersAbsences.data)) {
    return <Alert message='Failed to load the list' />
  }

  return (
    <Wrapper>
      <AbsencesFilter />
      {membersAbsences.data.length > 0
        ? (
          <>
            <AbsencesPaginator
              currentPage={pagination.currentPage}
              totalPages={calculateTotalPages(membersAbsences.data.length)}
              totalAbsences={membersAbsences.data.length}
              onPageChange={(newPage: number) => setPage(newPage)}
            />
            <AbsencesList
              absences={
                membersAbsences.data.slice(
                  paginate(pagination.currentPage).from,
                  paginate(pagination.currentPage).to
                )
              }
            />
          </>
          )
        : (
          <Alert
            message='Nothing to show'
          />
          )
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 4em;
`

export default AbsencePage
