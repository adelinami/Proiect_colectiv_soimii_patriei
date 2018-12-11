import * as React from "react";

export class FetchUtils extends React.Component {
  static submitPostRequest(path: string, params: object) {
    const jsonCfg = require('src/app_properties.json');
    const requestUrl = jsonCfg.baseUrl + path;

    const promisedResponse = fetch(requestUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: this.bodyFromObject(params)
    });

    return promisedResponse.then(response => response.json());
  }

  static bodyFromObject (params:object) {
    let paramsString = "";
    Object.keys(params).forEach(key => {
      paramsString+= "&"+ key + "=" + params[key];
    });

    return paramsString;
  }
}