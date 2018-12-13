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
import Button from "@material-ui/core/Button";
import {FetchUtils} from "../../../utils/FetchUtils";
import {BrowseJobsList} from "./BrowseJobsList";

interface Props extends StyledComponentProps{
  viewStore: ViewStore;
}

interface State {
  type: string;
  jobs: Job[];
}

const style = (themee: Theme) => createStyles({
  paper: {
    margin: themee.spacing.unit * 5,
    backgroundColor: themee.palette.background.default
  },
  searchContainer: {
    marginLeft: '10px',
    alignSelf: 'left',
    width: '30%'
  },
  input: {
    color: themee.palette.text.primary,
    padding: '10px 12px',
  },
  placeholder: {
    color: themee.palette.text.primary,
  },
  button: {
    padding: '10px 12px',
    marginTop: '20px'
  }
});

@inject("viewStore")
@observer
class BrowseJobsBase extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {type:"", jobs: []};
  }

  componentDidMount(): void {
    this.updateJobs();
  }

  updateJobs() {
    const promise = FetchUtils.submitPostRequest("/search", {"type": this.state.jobs});

    promise.then(json=>{
      console.log(json);
    }).catch(error=>{
      console.log(error);
    });

    this.setState({jobs: [
        new Job("1", "cleaning", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt", "bob321", "dinner", "20-09-2018"),
        new Job("2", "dog walk", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "angry_cat98", "5", "23-09-2018"),
        new Job("3", "kid", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "xfg45", "12", "30-09-2018"),
      ]});
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    this.updateJobs();
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
            <div className={classes.searchContainer}>
              <form onSubmit={this.handleSubmit}>
                <TextField
                  label="Type"
                  className={classes.bootstrapInput}
                  InputLabelProps = {{style: {color: '#c7d2e2'}}}
                  value={this.state.type}
                  onChange={this.handleInputChange}
                  margin="normal"
                />
                <Button variant="contained" color="primary" className={classes.button} type={"submit"}>
                  Search
                </Button>
              </form>
            </div>
            <BrowseJobsList jobs={this.state.jobs}/>
          </Paper>
      </MuiThemeProvider>
    );
  }
}

export const BrowseJobs = withStyles(style)(BrowseJobsBase);