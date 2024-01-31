import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  TextboxInputModule, EmailTextboxInputModule, PhoneNumberTextboxInputModule, NumberTextboxInputModule
} from '@zuru/textbox-input';
import { CheckboxModule } from '@zuru/checkbox';
import { CheckboxListModule } from '@zuru/checkbox-list';
import { RadioButtonListModule } from '@zuru/radiobutton-list';
import { DropdownListModule } from '@zuru/dropdown-list';
import { DatePickerModule } from '@zuru/date-picker';
import { DialogModule } from '@zuru/dialog';
import { SnackbarModule } from '@zuru/snackbar';
import { EmployeeRegistrationComponent } from './employee-registration.component';
import { EmployeeRegistationService } from './employee-registration.service';

@NgModule({
  declarations: [EmployeeRegistrationComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    TextboxInputModule, EmailTextboxInputModule, PhoneNumberTextboxInputModule,
    NumberTextboxInputModule, CheckboxModule, CheckboxListModule, RadioButtonListModule, DropdownListModule,
    DatePickerModule, 
    DialogModule, SnackbarModule
  ],
  exports: [EmployeeRegistrationComponent],
  providers: [DecimalPipe, EmployeeRegistationService],
  bootstrap: [EmployeeRegistrationComponent]
})
export class EmployeeRegistrationModule {

}
