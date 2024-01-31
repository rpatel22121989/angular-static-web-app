import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppService } from './app.servie';
import { EmployeeRegistrationModule } from './employee-registration/employee-registration.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    EmployeeRegistrationModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
