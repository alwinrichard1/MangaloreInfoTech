import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBoxComponent } from './shared/search-box/search-box.component';
import { CaseResultComponent } from './result/case-result/case-result.component';
import { CaseDetailsComponent } from './result/case-details/case-details.component';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ResultComponent } from './result/result.component';
import { MatListModule } from '@angular/material/list';

import { FormsModule } from '@angular/forms';
import { CommonService } from './shared/common.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    CaseResultComponent,
    CaseDetailsComponent,
    HomeComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
