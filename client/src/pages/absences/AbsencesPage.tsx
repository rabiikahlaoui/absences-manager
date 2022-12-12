import React from 'react'
import styled from 'styled-components'

import AbsenceFilter from './AbsencesFilter'
import AbsenceList from './AbsencesList'
import AbsencePaginator from './AbsencesPaginator'

const AbsencePage: React.FC<{}> = () => {
  return (
    <Wrapper>
      <AbsenceFilter />
      <AbsencePaginator />
      <AbsenceList />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 4em;
`

export default AbsencePage
