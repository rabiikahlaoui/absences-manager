import React from 'react'
import styled from 'styled-components'
import AbsencesItem from './AbsencesItem'

const AbsenceList: React.FC<{}> = () => {
  return (
    <>
      <ListWrapper>
        <div className="absences-list--header">
          <div className="absences-list--header-label w-200px">Member name</div>
          <div className="absences-list--header-label w-120px">Type of absence</div>
          <div className="absences-list--header-label w-200px">Period</div>
          <div className="absences-list--header-label w-200px">Member note</div>
          <div className="absences-list--header-label w-120px">Status</div>
          <div className="absences-list--header-label w-200px">Admitter note</div>
          <div className="absences-list--header-label w-120px"></div>
        </div>
        <div className="absences-list--body">
          <AbsencesItem />
          <AbsencesItem />
          <AbsencesItem />
        </div>
      </ListWrapper>
    </>
  )
}

const ListWrapper = styled.div`
  .absences-list--header {
    display: flex;

    .absences-list--header-label {
      font-size: 14px;
      color: #888;
      padding: 12px 12px;
      display: flex;
      align-items: center;
    }
  }

  .w-120px {
    width: 120px;
  }

  .w-200px {
    width: 200px;
  }
`

export default AbsenceList
