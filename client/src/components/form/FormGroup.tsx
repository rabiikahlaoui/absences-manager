import React from 'react'
import styled from 'styled-components'

interface Props {
  label: string
  cssClass: string | null
  children: JSX.Element
}

const FormGroup: React.FC<Props> = ({ label, cssClass, children }) => {
  return (
    <>
      <FormGroupWrapper className={cssClass ?? ''}>
        <label className="form-group--label">{label}</label>
        {children}
      </FormGroupWrapper>
    </>
  )
}

const FormGroupWrapper = styled.div`
  border-bottom: 2px solid #ccc;
  padding: 4px 6px;
  display: flex;
  flex-direction: column;
  width: 220px;

  &.active {
    background: #fff5e9;
    border-color: #ff9419;
  }

  .form-group--label {
    color: #888;
    font-size: 14px;
    margin-bottom: 4px;
  }

  .form-group--control {
    border: none;
    outline: none;
    background: none;
    color: #666;
    padding: 2px;
    font-size: 16px;
    cursor: pointer;
  }
`

export default FormGroup
