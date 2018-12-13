import * as React from "react"
import {Job} from "../../../view-models/Job";
import {Paper, StyledComponentProps, Theme} from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

const style = (theme: Theme) => createStyles({
  typeTag: {
    backgroundColor: theme.palette.secondary.main,
    flexGrow: 1,
    padding: theme.spacing.unit * 10
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    padding: '10px 12px',
    marginTop: '20px'
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 10
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 10,
    margin: theme.spacing.unit * 10,
  }
});

interface Props extends StyledComponentProps{
  job: Job
}

class BrowseJobsBoxBase extends React.Component<Props>{
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;

    return (
      <React.Fragment>
          <Paper className={classes.container}>
            <Grid container={true} spacing={24} justify="center">
              <Grid item={true} xs={2}>
                <Paper className={classes.typeTag}>
                  {this.props.job.type}
                </Paper>
              </Grid>
              <Grid item={true} xs={10} className={classes.container}>
                {/*empty*/}
              </Grid>

            </Grid>
            <Grid container={true} spacing={24} justify="center">
              <Grid item={true} xs={12}>
                <Paper className={classes.paper}>
                  <Typography>
                    {this.props.job.descriptionPreview}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid container={true} spacing={24} justify="center">
              <Grid item={true} xs={5}>
                <Paper className={classes.paper}>
                  Published at: {this.props.job.date}
                </Paper>
              </Grid>
              <Grid item={true} xs={2}>
                {/*empty*/}
              </Grid>
              <Grid item={true} xs={5} >
                <Paper className={classes.paper}>
                  Reward: {this.props.job.reward}
                </Paper>
              </Grid>

              <Grid item={true} xs={12} >
                <Button variant="contained" color="primary" className={classes.button} type={"submit"}>
                  Apply
                </Button>
              </Grid>
            </Grid>
          </Paper>
      </React.Fragment>
    );
  }

}

export const BrowseJobsBox = withStyles(style)(BrowseJobsBoxBase);