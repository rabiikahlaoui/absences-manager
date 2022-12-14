import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { loadAbsences, clearAbsences } from '../../state/action-creators/absencesActionCreators'
import { loadMembers, clearMembers } from '../../state/action-creators/membersActionCreators'
import { getMembersAbsences } from '../../state/selectors/absencesSelectors'

import AbsenceFilter from './AbsencesFilter'
import AbsenceList from './AbsencesList'
import AbsencePaginator from './AbsencesPaginator'

interface Pagination {
  currentPage: number
  totalPages: number
}

const AbsencePage: React.FC<{}> = () => {
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

  if (membersAbsences.status === 'Loading') {
    return <>Loading...</>
  }

  if (!Array.isArray(membersAbsences.data)) {
    return <>Error...</>
  }

  return (
    <Wrapper>
      <AbsenceFilter />
      <AbsencePaginator
        currentPage={pagination.currentPage}
        totalPages={calculateTotalPages(membersAbsences.data.length)}
        totalAbsences={membersAbsences.data.length}
        onPageChange={(newPage: number) => setPage(newPage)}
      />
      <AbsenceList
        status={membersAbsences.status}
        absences={membersAbsences.data.slice((pagination.currentPage - 1) * 10, pagination.currentPage * 10)}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 4em;
`

export default AbsencePage
