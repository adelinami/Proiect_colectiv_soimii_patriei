import * as React from "react";
import { inject, observer } from "mobx-react";
import { ViewStore } from "src/store/view-store";
import {RecommendedJobsTable} from "../recommended-jobs/RecommendedJobsTable";
import {Job} from "../../../view-models/Job";
import {theme} from "../../../themes/main-theme";
import {createStyles, MuiThemeProvider, StyledComponentProps, Theme} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import TextField from "@material-ui/core/TextField/TextField";
import withStyles from "@material-ui/core/styles/withStyles";

interface Props extends StyledComponentProps{
  viewStore: ViewStore;
}

interface State {
  type: string;
}

const style = (themee: Theme) => createStyles({
  paper: {
    margin: themee.spacing.unit * 5
  },
  input: {
    color: themee.palette.text.primary,
    padding: '10px 12px',
  },
  placeholder: {
    color: themee.palette.text.primary,
  }
});

@inject("viewStore")
@observer
class BrowseJobsBase extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {type:""};
  }

  getJobs() {
    return [
      new Job("1", "cleaning", "clean my house", "bob321", "dinner", "20-09-2018"),
      new Job("2", "dog walk", "walk good boie", "angry_cat98", "5", "23-09-2018"),
      new Job("3", "kid", "take care of my toddler!!", "xfg45", "12", "30-09-2018"),
    ];
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state.type);
    const data = {
      username: this.state.type,
    };
    // handle based on data (update table)
  };

  handleInputChange = (event)=>{
    event.preventDefault();
    this.setState({type: event.target.value});
  };

  render(): React.ReactNode {
    const {classes} = this.props;

    return (
      <MuiThemeProvider theme = {theme}>
          <Paper className={classes.paper}>
            <form onSubmit={this.handleSubmit}>
              <TextField
                label="Type"
                className={classes.bootstrapInput}
                InputLabelProps = {{style: {color: '#c7d2e2'}}}
                value={this.state.type}
                onChange={this.handleInputChange}
                margin="normal"
              />
            </form>
            <RecommendedJobsTable jobs={this.getJobs()}/>
          </Paper>
      </MuiThemeProvider>
    );
  }
}

export const BrowseJobs = withStyles(style)(BrowseJobsBase);