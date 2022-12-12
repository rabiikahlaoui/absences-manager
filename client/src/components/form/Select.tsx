import React, { useState } from 'react'
import FormGroup from './FormGroup'

interface Props {
  label: string
  name?: string
  value?: string
  onChange?: Function
  options: {
    [key: string]: string
  }
}

const Select: React.FC<Props> = ({ label, name, value, options, onChange }) => {
  const [focused, setFocused] = useState(false)

  return (
    <>
      <FormGroup
        label={label}
        cssClass={focused ? 'active' : null}
      >
        <select
            className="form-group--control"
            name={name}
            value={value}
            onChange={(e) => { if (onChange !== null && onChange !== undefined) onChange(e) }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
        >
            {Object.keys(options).map((key, index) => (
            <option key={key} value={key}>
                {options[key]}
            </option>
            ))}
        </select>
      </FormGroup>
    </>
  )
}

export default Select
