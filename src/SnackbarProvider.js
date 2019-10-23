import React from "react"
import { Snackbar as MuiSnackbar } from "@material-ui/core"

export const SnackbarContext = React.createContext()
const Snackbar = (() => {
  const queue = []
  return (props) => {
    const [open, setOpen] = React.useState(false)
    const [messageInfo, setMessageInfo] = React.useState({
      vertical: "bottom",
      horizontal: "center",
    })
    const processQueue = () => {
      if (queue.length > 0) {
        setMessageInfo(queue.shift())
        setOpen(true)
      }
    }
    const handleClick = (
      message,
      {
        autoHideDuration = 3000,
        vertical = "bottom",
        horizontal = "center",
      } = {},
    ) => {
      queue.push({
        message,
        autoHideDuration,
        vertical,
        horizontal,
        key: new Date().getTime(),
      })

      if (open) {
        // immediately begin dismissing current message
        // to start showing new one
        setOpen(false)
      } else {
        processQueue()
      }
    }

    const handleClose = (event, reason) => {
      /* istanbul ignore next */
      if (reason === "clickaway") {
        return
      }
      setOpen(false)
    }

    const handleExited = () => {
      processQueue()
    }
    return (
      <SnackbarContext.Provider value={{ addMessage: handleClick }}>
        <MuiSnackbar
          key={messageInfo.key}
          anchorOrigin={{
            vertical: messageInfo.vertical,
            horizontal: messageInfo.horizontal,
          }}
          open={open}
          autoHideDuration={messageInfo.autoHideDuration}
          onClose={handleClose}
          onExited={handleExited}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          message={<span id="message-id">{messageInfo.message}</span>}
        />

        {props.children}
      </SnackbarContext.Provider>
    )
  }
})()
export default Snackbar
