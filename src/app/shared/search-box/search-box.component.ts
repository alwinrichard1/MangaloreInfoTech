import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output() searchItemEvent = new EventEmitter<string>();
  seachString: any = '';
  constructor() { }

  ngOnInit(): void {
  }

  public emitSearchItem(value: string) {
    this.searchItemEvent.emit(value);
  }

}
