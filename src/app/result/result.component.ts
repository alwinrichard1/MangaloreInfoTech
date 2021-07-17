import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  searchResult: any;
  selectedCaseDetails: any;
  searchString: any;
  loaderStatus = true;
  fullScreen = false;

  constructor(
    private route: ActivatedRoute,
    public commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.searchString = this.route.snapshot.params.searchString
    this.getSearchResult(this.searchString);
  }

  public getSearchResult(searchString: string) {
    this.commonService.getSearchResult(searchString, 1).subscribe((res: any) => {
      this.searchResult = res.data.result;
      if (this.searchResult[0].case.case_id) {
        this.getCaseDetails(this.searchResult[0].case.case_id)
        this.loaderStatus = false;
      }
    })
  }

  public getCaseDetails(caseId: string) {
    this.loaderStatus = true;
    this.commonService.getCaseDetails(caseId).subscribe((res: any) => {
      this.selectedCaseDetails = res.data.case;
      this.loaderStatus = false;
    })
  }

  public getPageNumber(pageNumber: number) {
    this.loaderStatus = true;
    this.commonService.getSearchResult(this.searchString, pageNumber).subscribe((res: any) => {
      this.searchResult = res.data.result;
      this.loaderStatus = false;
    });
  }

  public getFullScreenStatus(status: boolean) {
    this.fullScreen = status;
    console.log(status);

  }

}
