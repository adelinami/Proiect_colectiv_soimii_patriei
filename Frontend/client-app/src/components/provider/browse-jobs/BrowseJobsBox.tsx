import * as React from "react"
import {Job} from "../../../view-models/Job";
import {Paper, StyledComponentProps, Theme} from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = (theme: Theme) => createStyles({
  typeTag: {
    backgroundColor: theme.palette.secondary.main,
    flexGrow: 1,

  },
  dateTag: {

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
        <Grid container={true} spacing={24} justify="center">
          <Grid item={true} xs={6} className={classes.typeTag}>
            {this.props.job.type}
          </Grid>
          <Grid item={true} xs={6} className={classes.typeTag} >
            {this.props.job.date}
          </Grid>
        </Grid>
    );
  }

}

export const BrowseJobsBox = withStyles(style)(BrowseJobsBoxBase);