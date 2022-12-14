import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { loadAbsences, clearAbsenses } from '../../state/action-creators/absencesActionCreators'
import getAbsences from '../../state/selectors/absencesSelectors'

import AbsenceFilter from './AbsencesFilter'
import AbsenceList from './AbsencesList'
import AbsencePaginator from './AbsencesPaginator'

const AbsencePage: React.FC<{}> = () => {
  const dispatch = useDispatch<any>()
  const absences = useSelector(getAbsences)

  // Dispatch load absences on component mount
  useEffect(() => { dispatch(loadAbsences()) }, [])

  // Dispatch clear absences on component unmount
  useEffect(() => () => { clearAbsenses() }, [])

  return (
    <Wrapper>
      <AbsenceFilter />
      <AbsencePaginator />
      <AbsenceList
        status={absences.status}
        absences={absences?.data}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 4em;
`

export default AbsencePage
