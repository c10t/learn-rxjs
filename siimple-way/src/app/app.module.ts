import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReaderSwitchComponent } from './component/reader-switch/reader-switch.component';
import { ReaderListComponent } from './component/reader-list/reader-list.component';
import { ReaderComponent } from './component/reader/reader.component';

@NgModule({
  declarations: [
    AppComponent,
    ReaderSwitchComponent,
    ReaderListComponent,
    ReaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
