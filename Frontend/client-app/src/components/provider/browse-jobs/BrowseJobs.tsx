import * as React from "react";
import { inject, observer } from "mobx-react";
import { ViewStore } from "src/store/view-store";
import {RecommendedJobsTable} from "../recommended-jobs/RecommendedJobsTable";
import {Job} from "../../../view-models/Job";
import {theme} from "../../../themes/main-theme";
import {MuiThemeProvider} from "@material-ui/core";

interface Props {
  viewStore: ViewStore;
}

@inject("viewStore")
@observer
export class BrowseJobs extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  getJobs() {
    return [
      new Job("1", "cleaning", "clean my house", "bob321", "dinner", "20-09-2018"),
      new Job("2", "dog walk", "walk good boie", "angry_cat98", "5", "23-09-2018"),
      new Job("3", "kid", "take care of my toddler!!", "xfg45", "12", "30-09-2018"),
    ];
  }


  render(): React.ReactNode {
    return (
      <MuiThemeProvider theme = {theme}>
        <React.Fragment>
          <RecommendedJobsTable jobs={this.getJobs()}/>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
