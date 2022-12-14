import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Alert from '../../components/Alert'
import Loader from '../../components/Loader'
import { loadAbsences, clearAbsences } from '../../state/action-creators/absencesActionCreators'
import { loadMembers, clearMembers } from '../../state/action-creators/membersActionCreators'
import { getMembersAbsences } from '../../state/selectors/absencesSelectors'
import RequestStatus from '../../type-defs/requestStatus'

import AbsenceFilter from './AbsencesFilter'
import AbsenceList from './AbsencesList'
import AbsencePaginator from './AbsencesPaginator'

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
    dispatch(loadAbsences())
    dispatch(loadMembers())
  }, [])

  // Dispatch clear absences on component unmount
  useEffect(() => () => {
    clearAbsences()
    clearMembers()
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
      <AbsenceFilter />
      {membersAbsences.data.length > 0
        ? (
          <>
            <AbsencePaginator
              currentPage={pagination.currentPage}
              totalPages={calculateTotalPages(membersAbsences.data.length)}
              totalAbsences={membersAbsences.data.length}
              onPageChange={(newPage: number) => setPage(newPage)}
            />
            <AbsenceList
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
