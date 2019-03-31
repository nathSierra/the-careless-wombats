import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "../../src/CSS/App.css";
import Modal from "@material-ui/core/Modal";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  },
  control: {
    padding: theme.spacing.unit * 2
  },
    container: {
    position: "relative"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

class BusinessDirectory extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} id="businessList">
        <Grid>
          <Grid
            container
            spacing={16}
            alignItems="flex-start"
            direction="column"
            justify="center"
          >
            <Grid item className="businessPaper clearfix">
              <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                  The Fuzzy Mule
                </Typography>
                <Typography variant="h6" component="h3">
                  Tuesday NasCar Trivia Night
                </Typography>
                <Typography component="p">
                Drunk is when you feel sophisticated, but can't pronounce it.
                  <Button
                    onClick={this.handleOpen}
                    // variant="contained"
                    color="secondary"
                    className={classes.button}
                  >
                    check us out
                  </Button>
                  <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                  >
                    <div style={getModalStyle()} className={classes.paper} id="modal">
                      <Typography variant="h6" id="modal-title">
                        The Fuzzy Mule
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        id="simple-modal-description"
                      >
                        Drunk is when you feel sophisticated, but can't pronounce it.
                      </Typography>
                      <Button 
                      id="modalLink" href="https://www.finestcall.com/vodka/fuzzy-mule/"></Button>
                      <Typography variant="subtitle2">
                        NasCar trivia every Monday from 4:30 to 9:00.  Half-price Pabst all weekend. Strip show/nacho bar every Thursday - kids eat free.
                      </Typography>
                    </div>
                  </Modal>
                </Typography>
              </Paper>
            </Grid>
            <Grid item className="businessPaper">
              <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                  Mabel's Bar & Chainsaw Repair
                </Typography>
                <Typography component="p">
                  Whatever you do... tear it up
                </Typography>
              </Paper>{" "}
            </Grid>

            <Grid item className="businessPaper">
              <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                  The Duke and Duck
                </Typography>
                <Typography variant="h6" component="h3">
                  Get pissed the English way
                </Typography>
                <Typography component="p">Bip Bip Cheerio</Typography>
              </Paper>{" "}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

BusinessDirectory.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BusinessDirectory);
