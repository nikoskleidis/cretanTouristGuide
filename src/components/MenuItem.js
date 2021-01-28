import React from "react"
import { NavLink } from "react-router-dom"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"

function MenuItem(props) {
  const { to, Icon, text } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <NavLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return (
    <ListItem button component={renderLink}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

export default MenuItem
