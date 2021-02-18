import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Divider from "@material-ui/core/Divider"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import { Pagination } from "@material-ui/lab"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
    marginBottom: 10
  },
  inline: {
    display: "inline"
  }
}))

const PAGE_SIZE = 5

function numPages(list, pageSize = PAGE_SIZE) {
  return Math.ceil(list.length / pageSize)
}

export default function PoiInfoList(props) {
  const { list, onPoiClick } = props
  const [selectedPage, setSelectedPage] = useState(1)
  const classes = useStyles()

  const startIndex = (selectedPage - 1) * PAGE_SIZE

  const items = list.filter(
    (poi, index) => index >= startIndex && index < startIndex + PAGE_SIZE
  )

  useEffect(() => {
    setSelectedPage(1)
  }, [list])

  return (
    <div>
      <List className={classes.root}>
        {items.map((poi, index) => (
          <>
            <ListItem
              alignItems="flex-start"
              button
              onClick={() => onPoiClick(poi)}>
              <ListItemAvatar>
                <Avatar alt={poi.name}>{poi.name[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={poi.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary">
                      {poi.desc}
                    </Typography>
                    <br />
                    {poi.link && (
                      <>
                        more info in{" "}
                        <a href={poi.link} target="_blank">
                          here
                        </a>
                      </>
                    )}
                  </React.Fragment>
                }
              />
            </ListItem>
            {index < list.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </>
        ))}
      </List>
      <Pagination
        count={numPages(list)}
        color="primary"
        size="small"
        page={selectedPage}
        onChange={(e, page) => setSelectedPage(page)}
      />
    </div>
  )
}
