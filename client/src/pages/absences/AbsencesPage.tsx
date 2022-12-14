import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { loadAbsences, clearAbsences } from '../../state/action-creators/absencesActionCreators'
import { loadMembers, clearMembers } from '../../state/action-creators/membersActionCreators'
import { getMembersAbsences } from '../../state/selectors/absencesSelectors'

import AbsenceFilter from './AbsencesFilter'
import AbsenceList from './AbsencesList'
import AbsencePaginator from './AbsencesPaginator'

const AbsencePage: React.FC<{}> = () => {
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

  return (
    <Wrapper>
      <AbsenceFilter />
      <AbsencePaginator />
      <AbsenceList
        status={membersAbsences.status}
        absences={membersAbsences?.data}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 4em;
`

export default AbsencePage
