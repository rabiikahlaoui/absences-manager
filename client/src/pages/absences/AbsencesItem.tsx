import React from 'react'
import styled from 'styled-components'
import MemberAbsence from '../../type-defs/memberAbsence'
import onDownloadICalFile from '../../utils/generateICalFile'

interface Props {
  absence: MemberAbsence
}

const AbsencesItem: React.FC<Props> = ({ absence }) => {
  return (
    <>
      <ItemWrapper>
        <div className="absences-list--item-value w-200px">
          <div className="absences-list--item-image" style={{ backgroundImage: `url(${absence.image})` }}></div>
          <span className="absences-list--item-name">{absence.name}</span>
        </div>
        <div className="absences-list--item-value w-120px">{absence.type}</div>
        <div className="absences-list--item-value w-200px">{absence.startDate} - {absence.endDate}</div>
        <div className="absences-list--item-value w-200px">{absence.memberNote}</div>
        <div className="absences-list--item-value w-120px">{absence.status}</div>
        <div className="absences-list--item-value w-200px">{absence.admitterNote}</div>
        <div className='absences-list--item-value w-200px'>
          <button
            className='absences-list--download-ical'
            onClick={() => onDownloadICalFile(absence)}
          >
            Download iCal file
          </button>
        </div>
      </ItemWrapper>
    </>
  )
}

const ItemWrapper = styled.div`
  display: flex;
  background: #ede4e0;

  &:nth-child(even) {
    background: #faf5f3;
  }

  .absences-list--item-image {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    margin-right: 8px;
  }

  .absences-list--item-name {
    font-weight: 600;
  }

  .absences-list--item-value {
    font-size: 14px;
    color: #444;
    display: flex;
    align-items: center;
    padding: 8px 12px;
  }

  .absences-list--download-ical {
    color: #ff9419;
    font-weight: 600;
    font-size: 14px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`

export default AbsencesItem
