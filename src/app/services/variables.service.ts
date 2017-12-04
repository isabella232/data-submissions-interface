import { Headers } from '@angular/http';

export class VariablesService {
  host: string = "https://submission-dev.ebi.ac.uk/api/";
  authenticationHost: string = "https://explore.api.aap.tsi.ebi.ac.uk/";

  constructor() { }

  buildHeader(token: String) {
    // Build initial header.
    let header = new Headers({
      'Content-Type' : 'application/json',
      'Accept' : 'application/hal+json, application/json'
    });

    // Add authentication to header.
    if(token) {
      header.append("Authorization", "Bearer " + token);
    }

    return header;
  }
}
