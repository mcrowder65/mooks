import React from "react"
import PropTypes from "prop-types"
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  Grid,
  Typography,
  Card,
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

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
}
function Signup({ classes, _onSubmit }) {
  return (
    <Card className={classes.card}>
      <Grid>
        <Typography variant="h4">Sign up</Typography>
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
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Card>
  )
}
Signup.propTypes = {
  classes: PropTypes.object,
  _onSubmit: PropTypes.func,
}

export default withStyles(styles)(Signup)
