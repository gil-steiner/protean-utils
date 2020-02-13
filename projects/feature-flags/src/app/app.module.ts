import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FeatureFlagsTableComponent } from './components/feature-flags-table/feature-flags-table.component';
import {ClipboardModule} from 'ngx-clipboard';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    FeatureFlagsTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule,
    ClipboardModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
