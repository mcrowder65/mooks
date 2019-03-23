import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

import compose from "./compose";

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 300,
    padding: 20,
  },
};

function Login({ classes, _onSubmit }) {
  return (
    <Card className={classes.card}>
      <Typography variant="h4">Login</Typography>
      <form className={classes.content} onSubmit={_onSubmit}>
        <Grid container alignItems="center" direction="column">
          <Grid item>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
  _onSubmit: PropTypes.func.isRequired,
};
const enhance = compose(withStyles(styles));

export default enhance(Login);
