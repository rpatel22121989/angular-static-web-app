import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeRegistationService } from './employee-registration.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ITextboxInputOptions } from '@zuru/textbox-input';
import { ICheckboxOptions } from '@zuru/checkbox';
import { ICheckboxListOptions } from '@zuru/checkbox-list';
import { IRadiobuttonListOptions } from '@zuru/radiobutton-list';
import { IDropdownListOptions } from '@zuru/dropdown-list';
import { IDatePickerOptions } from '@zuru/date-picker';
import { DecimalPipe } from '@angular/common';
import { IValidationOptions } from '@zuru/shared-utils';

@Component({
  selector: 'app-employee-registation',
  templateUrl: 'employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit, AfterViewInit, OnDestroy {

  formGroup: FormGroup = null;

  firstNameInputOptions: ITextboxInputOptions = null;
  firstNameInputValidationOptions: IValidationOptions = null;
  lastNameInputOptions: ITextboxInputOptions = null;
  lastNameInputValidationOptions: IValidationOptions = null;
  emailInputOptions: ITextboxInputOptions = null;
  emailInputValidationOptions: IValidationOptions = null;
  phoneNumberInputOptions: ITextboxInputOptions = null;
  phoneNumberInputValidationOptions: IValidationOptions = null;
  postCodeInputOptions: ITextboxInputOptions = null;
  postCodeInputValidationOptions: IValidationOptions = null;
  salaryInputOptions: ITextboxInputOptions = null;
  salaryInputValidationOptions: IValidationOptions = null;
  genderRadiobuttonListOptions: IRadiobuttonListOptions = null;
  dobDatePickerOptions: IDatePickerOptions = null;
  termsConditionsCheckboxOptions: ICheckboxOptions = null;
  positionDropdownListOptions: IDropdownListOptions = null;
  skillsCheckboxListOptions: ICheckboxListOptions = null;

  validationMessage: string = '';

  constructor(private decimalPipe: DecimalPipe, private readonly formBuilder: FormBuilder, private readonly employeeRegistationService: EmployeeRegistationService) {

  }

  ngOnInit(): void {
    this.setControlOptions();
    this.createForm();
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {

  }

  setControlOptions(): void {
    this.firstNameInputOptions = {
      placeHolder: 'First Name',
      label: 'First name'
    };
    this.firstNameInputValidationOptions = {
      fieldName: 'FirstName'
    }
    this.lastNameInputOptions = {
      placeHolder: 'Last Name',
      label: 'Last name'
    };
    this.lastNameInputValidationOptions = {
      fieldName: 'LastName'
    };
    this.emailInputOptions = {
      placeHolder: 'Email Address',
      label: 'Email Address',
      dataFormatter: (inputValue: string) => {
        return inputValue.toLowerCase();
      }
    };
    this.emailInputValidationOptions = {
      fieldName: 'Email Address'
    };
    this.phoneNumberInputOptions = {
      placeHolder: 'Phone Number',
      label: 'Phone Number',
      maxLength: 11
    };
    this.phoneNumberInputValidationOptions = {
      fieldName: 'Phone Number'
    };
    this.postCodeInputOptions = {
      placeHolder: 'Post Code',
      label: 'Post Code',
    };
    this.postCodeInputValidationOptions = {
      fieldName: 'Post Code'
    };
    this.salaryInputOptions = {
      label: 'Salary',
      dataFormatter: (inputValue: string) => {
        const parts = inputValue.toString().split('.');
        parts[0] = this.decimalPipe.transform(parts[0].replace(/,/g, ''));
        return parts.join('.');
      }
    };
    this.salaryInputValidationOptions = {
      fieldName: 'Salary'
    };
    this.genderRadiobuttonListOptions = {
      source: [{
        genderId: 'Male',
        genderText: 'Male'
      }, {
        genderId: 'Female',
        genderText: 'Female'
      }, {
        genderId: 'Others',
        genderText: 'Others'
      }],
      dataTextKey: 'genderText',
      dataValueKey: 'genderId',
      gapBetweenRows: '10px',
      scrollable: false,
      validationOptions: {
        isVisible: true,
        fieldName: 'Gender'
      }
    };
    this.dobDatePickerOptions = {
      changesAppliedToModelOnApplyButtonClick: false,
      calendarOptions: {
        formattedSelectedDateOptions: {
          isVisible: false
        },
        clearButtonOpions: {
          isVisible: false,
        },
        setTodayButtonOptions: {
          isVisible: false
        }
      },
      closeButtonOptions: {
        isVisible: false
      }
    };
    this.termsConditionsCheckboxOptions = {
      text: 'Terms & Conditions'
    };
    this.positionDropdownListOptions = {
      searchable: false,
      isFocusable: true,
      selectableListOptions: {
        source: [
          { positionId: 1, positionText: 'Director' },
          { positionId: 2, positionText: 'Manager' },
          { positionId: 3, positionText: 'Team Leader' },
          { positionId: 4, positionText: 'Tech Leader' },
          { positionId: 5, positionText: 'Product Owner' },
          { positionId: 6, positionText: 'Sr. Software Engineer' },
          { positionId: 7, positionText: 'Jr. Software Engineer' },
          { positionId: 8, positionText: 'Tester' }
        ],
        searchOptions: {
          isVisible: false
        },
        dataTextKey: 'positionText',
        dataValueKey: 'positionId',
        containerHeight: 'auto',
        containerHeightCalculationBasedOnItemHeight: false
      }
    };
    this.skillsCheckboxListOptions = {
      source: [{
        skillId: 1,
        skillText: 'Javascript',
        skillType: 'Front End'
      }, {
        skillId: 2,
        skillText: 'Angular',
        skillType: 'Front End'
      }, {
        skillId: 3,
        skillText: 'React',
        skillType: 'Front End'
      }, {
        skillId: 4,
        skillText: 'Node.js',
        skillType: 'Back End'
      }, {
        skillId: 5,
        skillText: '.Net',
        skillType: 'Back End'
      }, {
        skillId: 6,
        skillText: 'Java',
        skillType: 'Back End'
      }, {
        skillId: 7,
        skillText: 'Python',
        skillType: 'Back End'
      }, {
        skillId: 8,
        skillText: 'SQL',
        skillType: 'Back End'
      }],
      dataTextKey: 'skillText',
      dataValueKey: 'skillId',
      gapBetweenRows: '10px',
      scrollable: false,
      validationOptions: {
        isVisible: true,
        fieldName: 'Skill'
      }
    };
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      firstName: new FormControl('', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(50)], updateOn: 'submit' }),
      lastName: new FormControl('', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(50)], updateOn: 'submit' }),
      emailAddress: new FormControl('', { validators: [Validators.required, Validators.maxLength(100), Validators.email], updateOn: 'submit' }),
      phoneNumber: new FormControl('', { validators: [Validators.required, Validators.maxLength(11)], updateOn: 'submit' }),
      postCode: new FormControl('', { validators: [Validators.required, Validators.maxLength(14)], updateOn: 'submit' }),
      salary: new FormControl(''),
      gender: new FormControl('', { validators: [Validators.required], updateOn: 'submit' }),
      dob: new FormControl('', { validators: [Validators.required], updateOn: 'submit' }),
      termsConditions: new FormControl(false, { validators: [Validators.requiredTrue], updateOn: 'submit' }),
      position: new FormControl('', { validators: [Validators.required], updateOn: 'submit' }),
      skills: new FormControl('', { validators: [Validators.required], updateOn: 'submit' })
    });
  }

  submitEmployeeDetails(): void {
    if (this.formGroup.controls['firstName'].untouched) {
      this.formGroup.controls['firstName'].markAsTouched();
    }
    if (this.formGroup.controls['lastName'].untouched) {
      this.formGroup.controls['lastName'].markAsTouched();
    }
    if (this.formGroup.controls['emailAddress'].untouched) {
      this.formGroup.controls['emailAddress'].markAsTouched();
    }
    if (this.formGroup.controls['phoneNumber'].untouched) {
      this.formGroup.controls['phoneNumber'].markAsTouched();
    }
    if (this.formGroup.controls['postCode'].untouched) {
      this.formGroup.controls['postCode'].markAsTouched();
    }
    if (this.formGroup.controls['salary'].untouched) {
      this.formGroup.controls['salary'].markAsTouched();
    }
    if (this.formGroup.controls['gender'].untouched) {
      this.formGroup.controls['gender'].markAsTouched();
    }
    if (this.formGroup.controls['dob'].untouched) {
      this.formGroup.controls['dob'].markAsTouched();
    }
    if (this.formGroup.controls['termsConditions'].untouched) {
      this.formGroup.controls['termsConditions'].markAsTouched();
    }
    if (this.formGroup.controls['position'].untouched) {
      this.formGroup.controls['position'].markAsTouched();
    }
    if (this.formGroup.controls['skills'].untouched) {
      this.formGroup.controls['skills'].markAsTouched();
    }
    console.log('this.formGroup::: ', this.formGroup.value);
  }
}