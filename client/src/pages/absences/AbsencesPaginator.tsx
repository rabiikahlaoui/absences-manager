import React from 'react'
import styled from 'styled-components'

const AbsencePaginator: React.FC<{}> = () => {
  return (
    <PaginationWrapper>
      <div className='absences-paginator--nav'>
        <button className='absences-paginator--arrow arrow-left'></button>
          Page:
          <input type="number" value="10" className='absences-paginator--form-control' />
          <span className='absences-paginator--total-pages'>/ 10</span>
        <button className='absences-paginator--arrow arrow-right'></button>
      </div>
      <span className='absences-paginator--total-count'>Total absences: 18</span>
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
      cursor: pointer;
  
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
  
      &.arrow-right:before {
        border-left:10px solid #ff9419; 
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
