import React from 'react'
import styled from 'styled-components'
import DatePicker from '../../components/form/DatePicker'
import Select from '../../components/form/Select'

const AbsenceFilter: React.FC<{}> = () => {
  return (
    <>
      <Wrapper>
        <DatePicker
          label='Date'
        />
        <Select
          label='Date'
          options={{
            sickness: 'Sickness',
            vacation: 'Vacation'
          }}
        />
        <button className='absences-filter--reset-button'>Reset</button>
        <button className='absences-filter--apply-button'>Apply</button>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  column-gap: 20px;

  button {
    border: none;
    font-size: 16px;
    padding: 10px 16px;
    cursor: pointer;

    &.absences-filter--reset-button {
      background: none;
      color: #bf596f;
      margin-left: 30px;
    }
  
    &.absences-filter--apply-button {
      background: #ff9419;
      color: #fff;
      border-radius: 3px;
    }
  }
`

export default AbsenceFilter
