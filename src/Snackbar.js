import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

const SnackbarContext = React.createContext();
export class SnackbarProvider extends React.Component {
  queue = [];

  state = {
    open: false,
    messageInfo: {},
  };

  handleClick = (message) => {
    this.queue.push({
      message,
      key: new Date().getTime(),
    });

    if (this.state.open) {
      // immediately begin dismissing current message
      // to start showing new one
      this.setState({ open: false });
    } else {
      this.processQueue();
    }
  };

  processQueue = () => {
    if (this.queue.length > 0) {
      this.setState({
        messageInfo: this.queue.shift(),
        open: true,
      });
    }
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };

  handleExited = () => {
    this.processQueue();
  };

  render() {
    const { messageInfo } = this.state;
    return (
      <SnackbarContext.Provider value={{ addMessage: this.handleClick }}>
        <Snackbar
          key={messageInfo.key}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleClose}
          onExited={this.handleExited}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          message={<span id="message-id">{messageInfo.message}</span>}
        />

        {this.props.children}
      </SnackbarContext.Provider>
    );
  }
}

export function useSnackbar() {
  return React.useContext(SnackbarContext);
}
