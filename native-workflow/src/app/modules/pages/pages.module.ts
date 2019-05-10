import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

@NgModule({
  declarations: [LoginComponent, ForgotpasswordComponent],
  imports: [
    PagesRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PagesModule { }
