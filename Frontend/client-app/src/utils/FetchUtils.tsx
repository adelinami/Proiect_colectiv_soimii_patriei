import * as React from "react";

export class FetchUtils extends React.Component {
  static submitPostRequest(path: string, params: object) {
    const jsonCfg = require('src/app_properties.json');
    const requestUrl = jsonCfg.baseUrl + path;

    const promisedResponse = fetch(requestUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(params)
    });

    return promisedResponse.then(response => response.json());
  }
}