import React from 'react'
import styled from 'styled-components'
import alertIcon from '../assets/icons/alert-circle.svg'

interface Props {
  message: string
}

const Alert: React.FC<Props> = ({ message }) => {
  return (
    <>
        <AlertWrapper>
          <img src={alertIcon} className='alert--image' />
          <span className='alert-message'>{message}</span>
        </AlertWrapper>
    </>
  )
}

const AlertWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #DDD;
  padding: 20px;
  
  .alert--image {
    width: 40px;
    margin-bottom: 10px;
  }

  .alert-message {
    color: #444;
  }
`

export default Alert
