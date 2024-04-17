import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dynamic-FormArray-Checkbox-in-Reactive-Form-Angular-17';


  /*----------------------------------------------------------------------------------------------
                          one Address is ByDefault Checked in FormArray
  -----------------------------------------------------------------------------------------------*/
  // myForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.myForm = this.fb.group({
  //     addresses: this.fb.array([])
  //   });

  //   // Add a default address when the component initializes
  //   this.addAddress(true);
  // }

  // get addresses() {
  //   return this.myForm.get('addresses') as FormArray;
  // }

  // addAddress(isDefault: boolean = false) {
  //   const addressGroup = this.fb.group({
  //     street: [''],
  //     city: [''],
  //     country: [''],
  //     isDefault: [isDefault]
  //   });

  //   this.addresses.push(addressGroup);
  // }

  // removeAddress(index: number) {
  //   this.addresses.removeAt(index);
  // }



  addressForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addressForm = this.fb.group({
      address: this.fb.array([
        this.createAddress(true) // Initial address with checkbox checked
      ])
    });
  }

  createAddress(val = false): FormGroup {
    return this.fb.group({
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      isPrimary: new FormControl(val) // Checkbox checked by default
    });
  }

  addAddress(): void {
    const addresses = this.addressForm.get('address') as FormArray;
    addresses.push(this.createAddress());
  }

  removeAddress(index: number): void {
    const addresses = this.addressForm.get('address') as FormArray;
    addresses.removeAt(index);
  }





}
