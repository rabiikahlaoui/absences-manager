import React from 'react'
import styled from 'styled-components'

import userIcon from '../../assets/icons/person.svg'
import calendarIcon from '../../assets/icons/calendar-outline.svg'
import settingIcon from '../../assets/icons/settings.svg'

const Header: React.FC = () => {
  return (
    <>
        <HeaderWrapper>
            <span className='top-nav--crew-name'>Crew name</span>

            <nav className='top-nav--navigation'>
                <a href='/' className='active'>
                    <img className='top-nav--link-icon' src={calendarIcon} />
                </a>
                <a>
                    <img className='top-nav--link-icon' src={settingIcon} />
                </a>
            </nav>

            <div className='top-nav--user'>
                <img className='top-nav--user-icon' src={userIcon} />
                <button className='top-nav--logout-btn'>Logout</button>
            </div>
        </HeaderWrapper>
    </>
  )
}

const HeaderWrapper = styled.div`
  background: #ff9419;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 12px 20px;
  color: #fff;

  .top-nav--crew-name {
    flex: 0 0 120px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }

  .top-nav--navigation {
    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin: 0 20px;
      padding: 0 6px 8px 6px;
      border-bottom: 4px solid transparent;
    }

    .active {
      border-color: #fff;
    }

    .top-nav--link-icon {
      height: 28px;
      width: 28px;
    }
  }

  .top-nav--user {
    flex: 0 0 120px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .top-nav--user-icon {
      height: 28px;
      width: 28px;
      margin-right: 12px;
      border-radius: 50%;
      fill: white;
    }

    .top-nav--logout-btn {
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
    }
  }
`

export default Header
