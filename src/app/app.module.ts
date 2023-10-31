import {  CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { ButtonModule } from 'primeng/button';
import {TreeModule} from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';


@NgModule({
  declarations: [
    AppComponent,
    PageErrorComponent,
    SideBarComponent,
    LayoutComponent,
    LoginComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TreeModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA]
})
export class AppModule { }
