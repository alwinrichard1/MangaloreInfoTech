import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-case-result',
  templateUrl: './case-result.component.html',
  styleUrls: ['./case-result.component.scss']
})
export class CaseResultComponent implements OnInit {
  @Input() caseResultList: any;
  @Output() caseIdEvent = new EventEmitter<string>();
  @Output() pageNumberEvent = new EventEmitter<number>();
  pageNumber = 1;
  constructor(
    public commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  public getCaseDetails(value: string) {
    this.caseIdEvent.emit(value);
  }

  public prev() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.pageNumberEvent.emit(this.pageNumber);
    }
  }

  public next() {
    if (this.pageNumber < 10) {
      this.pageNumber++;
      this.pageNumberEvent.emit(this.pageNumber);
    }
  }
  
}
