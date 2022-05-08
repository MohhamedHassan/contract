import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbDatepickerModule, NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { LangPipe } from '../pips/lang.pipe';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    LangPipe,],
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    NgbPaginationModule,
    NgbDatepickerModule,
    NgbModalModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    TranslateModule.forChild({
      defaultLanguage:'en',
      loader: {
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    })
  ], 
  exports: [TranslateModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    NgbPaginationModule,
    NgbDatepickerModule,
    NgbModalModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    LangPipe,
    MatIconModule
  ]
})
export class SharedModule { }
export function createTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}