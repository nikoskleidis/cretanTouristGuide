import React from "react"
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"

function MySelect({ className, name, options, onChange, value }) {
  return (
    <FormControl variant="outlined" className={className}>
      <InputLabel>{name}</InputLabel>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        label={name}>
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default MySelect
