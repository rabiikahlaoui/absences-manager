import React from 'react'
import styled from 'styled-components'

interface Props {
  currentPage: number
  totalPages: number
  totalAbsences: number
  onPageChange: Function
}

const AbsencePaginator: React.FC<Props> = ({ currentPage, totalPages, totalAbsences, onPageChange }) => {
  const applyPageChange = (e: any): void => {
    const paginationValue = e.target.value

    if (isNaN(paginationValue)) {
      return
    }

    if (paginationValue > totalPages || paginationValue < 1) {
      return
    }

    onPageChange(paginationValue as number)
  }

  const moveToPage = (pagePosition: number): void => {
    const newPage = currentPage + pagePosition

    if (newPage > totalPages || newPage < 1) {
      return
    }

    onPageChange(newPage)
  }

  return (
    <PaginationWrapper>
      <div className='absences-paginator--nav'>

        {/* Prev button */}
        <button
          className='absences-paginator--arrow arrow-left'
          disabled={currentPage === 1}
          onClick={() => moveToPage(-1)}
        ></button>

        {/* Page indicator */}
        Page:
        <input
          type="number"
          className='absences-paginator--form-control'
          min={1}
          max={totalPages}
          value={currentPage}
          onChange={(e) => applyPageChange(e)}
        />
        <span className='absences-paginator--total-pages'>/ {totalPages}</span>

        {/* Next button */}
        <button
          className='absences-paginator--arrow arrow-right'
          disabled={currentPage === totalPages}
          onClick={() => moveToPage(1)}
        ></button>
      </div>

      <span className='absences-paginator--total-count'>Total absences: {totalAbsences}</span>
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
