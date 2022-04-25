import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NavbarComponent,
    LayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    MatMenuModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader: {
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
