import React, { useState } from 'react'
import FormGroup from './FormGroup'

interface Props {
  label: string
  name?: string
  value?: string
  onChange?: Function
}

const DatePicker: React.FC<Props> = ({ label, name, value, onChange }) => {
  const [focused, setFocused] = useState(false)

  return (
    <>
      <FormGroup
        label={label}
        cssClass={focused ? 'active' : null}
      >
        <input
          type="date"
          className="form-group--control"
          name={name}
          value={value}
          onChange={(e) => { if (onChange !== null && onChange !== undefined) onChange(e) }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        ></input>
      </FormGroup>
    </>
  )
}

export default DatePicker
