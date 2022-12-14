import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getAbsencesPagination } from '../../state/selectors/absencesSelectors'
import { paginateAbsences } from '../../state/action-creators/absencesActionCreators'

const AbsencePaginator: React.FC<{}> = () => {
  const dispatch = useDispatch<any>()
  const paginationData = useSelector(getAbsencesPagination)

  const dispatchPagination = (currentPage: number): void => {
    dispatch(paginateAbsences({
      ...paginationData,
      currentPage
    }))
  }

  const applyPageChange = (e: any): void => {
    if (isNaN(e.target.value)) {
      return
    }

    const paginationValue = e.target.value as number

    if (paginationValue > paginationData.totalPages) {
      return
    }

    if (paginationValue < 1) {
      return
    }

    dispatchPagination(e.target.value)
  }

  const moveToPage = (pagePosition: number): void => {
    const newPage: number = (paginationData.currentPage as number) + pagePosition
    dispatchPagination(newPage)
  }

  return (
    <PaginationWrapper>
      <div className='absences-paginator--nav'>

        {/* Prev button */}
        <button
          className='absences-paginator--arrow arrow-left'
          disabled={paginationData?.currentPage === 1}
          onClick={() => moveToPage(-1)}
        ></button>

        {/* Page indicator */}
        Page:
        <input
          type="number"
          className='absences-paginator--form-control'
          min={1}
          max={paginationData?.totalPages}
          value={paginationData?.currentPage}
          onChange={(e) => applyPageChange(e)}
        />
        <span className='absences-paginator--total-pages'>/ {paginationData?.totalPages}</span>

        {/* Next button */}
        <button
          className='absences-paginator--arrow arrow-right'
          disabled={paginationData?.currentPage === paginationData?.totalPages}
          onClick={() => moveToPage(1)}
        ></button>
      </div>

      <span className='absences-paginator--total-count'>Total absences: {paginationData?.totalAbsences}</span>
    </PaginationWrapper>
  )
}

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:before {
    content: "";
    width: 150px;
  }

  .absences-paginator--nav {
    display: flex;
    align-items: center;

    .absences-paginator--total-pages {
      font-size: 16px;
      height: 32px;
      line-height: 32px;
    }

    .absences-paginator--form-control {
      width: 28px;
      height: 32px;
      line-height: 32px;
      padding: 0 4px 0 0;
      border: none;
      outline: none;
      font-size: 16px;
      text-align: right;

      &:hover,
      &:focus {
        background: #fff5e9;
      }
    }

    .absences-paginator--arrow {
      background: none;
      border: none;
      margin: 0 15px;

      &:not(:disabled) {
        cursor: pointer;
      }
  
      &:before {
        display: block;
        content: "";
        width: 0; 
        height: 0; 
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent; 
      }
  
      &.arrow-left:before {
        border-right:10px solid #ff9419; 
      }

      &.arrow-left:disabled:before {
        border-right-color: #CCC;
      }
  
      &.arrow-right:before {
        border-left:10px solid #ff9419; 
      }

      &.arrow-right:disabled:before {
        border-left-color: #CCC;
      }
    }
  }

  .absences-paginator--total-count {
    width: 150px;
    text-align: right;
    font-size: 18px;
    font-weight: 600;
  }
`

export default AbsencePaginator
