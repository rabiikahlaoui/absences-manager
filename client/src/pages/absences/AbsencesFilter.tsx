import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { DatePicker, Select } from '../../components'
import { absencesActionCreators } from '../../state'

interface filterData {
  date: string | null
  type: string | null
}

const AbsencesFilter: React.FC = () => {
  const [filterData, setFilterData] = useState<filterData>({ date: null, type: null })
  const dispatch = useDispatch<any>()

  // Set filter local state
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilterData({
      ...filterData,
      [e.target.name]: e.target.value
    })
  }

  // Reset filter local and redux state
  const resetFilter = (): void => {
    const initialFilterState = {
      date: null,
      type: null
    }

    setFilterData(initialFilterState)
    dispatch(absencesActionCreators.filterAbsences(initialFilterState))
  }

  // Dispatch the local state to redux
  const dispatchFilter = (): void => {
    dispatch(absencesActionCreators.filterAbsences(filterData))
  }

  return (
    <>
      <Wrapper>
        <DatePicker
          label='Date of absence'
          value={filterData.date ?? ''}
          name='date'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilterChange(e)}
        />
        <Select
          label='Type of absence'
          value={filterData.type ?? ''}
          name='type'
          options={{
            allAbsences: 'All absences',
            sickness: 'Sickness',
            vacation: 'Vacation'
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilterChange(e)}
        />
        <button className='absences-filter--reset-button' onClick={resetFilter}>Reset</button>
        <button className='absences-filter--apply-button' onClick={dispatchFilter}>Apply</button>
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

export default AbsencesFilter
