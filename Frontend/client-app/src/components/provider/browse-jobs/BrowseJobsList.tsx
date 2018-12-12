import * as React from "react"
import {Job} from "../../../view-models/Job";
import {BrowseJobsBox} from "./BrowseJobsBox";

interface Props {
  jobs: Job[]
}

export class BrowseJobsList extends React.Component<Props>{
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <React.Fragment>
        {this.props.jobs.map(job => {
          return <BrowseJobsBox job={job} key = {job.id}/>
        })}
      </React.Fragment>
    );
  }

}