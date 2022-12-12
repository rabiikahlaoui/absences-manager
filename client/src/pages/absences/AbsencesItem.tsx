import React from 'react'
import styled from 'styled-components'

const AbsencesItem: React.FC<{}> = () => {
  return (
    <>
      <ItemWrapper>
        <div className="absences-list--item-value w-200px">
          <div className="absences-list--item-image" style={{ backgroundImage: 'url(https://loremflickr.com/300/400)' }}></div>
          <span className="absences-list--item-name">Name</span>
        </div>
        <div className="absences-list--item-value w-120px">Sickness</div>
        <div className="absences-list--item-value w-200px">2022-12-01 - 2022-12-06</div>
        <div className="absences-list--item-value w-200px">Sorry</div>
        <div className="absences-list--item-value w-120px">Approved</div>
        <div className="absences-list--item-value w-200px">No problem</div>
        <div className="absences-list--item-value w-120px"></div>
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
`

export default AbsencesItem
