import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent implements OnInit {
  @Input() selectedCaseDetails: any;
  @Output() fullScreenEvent = new EventEmitter<boolean>();
  fullScreen = false;
  constructor() { }

  ngOnInit(): void {

  }

  public fullScreenStatus(status: boolean) {
    this.fullScreen = status;
    this.fullScreenEvent.emit(status);
  }

}
