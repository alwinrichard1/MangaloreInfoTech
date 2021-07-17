import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public token = '6044fbb926adfd33c9f74dca6b8048d353fc52f4';
  constructor(
    public http: HttpClient
  ) { }


  public getCaseDetails(caseID: string) {
    const url = `https://api.unicourt.com/rest/v1/case/${caseID}/?token=${this.token}`;
    return this.http.get(url);
  }

  public getSearchResult(searchString: string, pageNumber: number) {
    let payload = {
      "query": [
        {
          "search_terms": [
            searchString
          ]
        }
      ],
      "page": pageNumber,
      "sort_by": "Filing Date",
      "filters": []
    }
    const url = `https://api.unicourt.com/rest/v1/search/?token=${this.token}`;
    return this.http.post(url, payload);
  }


}
