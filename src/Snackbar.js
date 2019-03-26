import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

const SnackbarContext = React.createContext();
export const SnackbarProvider = (() => {
  const queue = [];
  return (props) => {
    const [open, setOpen] = React.useState(false);
    const [messageInfo, setMessageInfo] = React.useState({});
    const processQueue = () => {
      if (queue.length > 0) {
        setMessageInfo(queue.shift());
        setOpen(true);
      }
    };
    const handleClick = (message, autoHideDuration = 3000) => {
      queue.push({
        message,
        autoHideDuration,
        key: new Date().getTime(),
      });

      if (open) {
        // immediately begin dismissing current message
        // to start showing new one
        setOpen(false);
      } else {
        processQueue();
      }
    };

    const handleClose = (event, reason) => {
      console.log(reason);
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
    };

    const handleExited = () => {
      processQueue();
    };
    return (
      <SnackbarContext.Provider value={{ addMessage: handleClick }}>
        <Snackbar
          key={messageInfo.key}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
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
    );
  };
})();

export function useSnackbar() {
  return React.useContext(SnackbarContext);
}
