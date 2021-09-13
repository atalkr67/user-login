
import { NgModule }      from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule, FormGroup, Validators } from '@angular/forms';

import { NgForm } from '@angular/forms';
import { ProjectService } from '../services/project.service';

import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  image1 = '/assets/images/image1.jpg';

  userDetails: any = [];

  userName = '';
  userEmail = '';
  userContact = '';
  userPassword = '';

  invalidName: boolean = true;
  invalidContact: boolean = true;
  invalidEmail: boolean = true;
  invalidPassword: boolean = true;

  nameClicked: boolean = false;
  contactClicked: boolean = false;
  emailClicked: boolean = false;
  passwordClicked: boolean = false;

  nameValidation() {
    var re = new RegExp("^[a-zA-Z ]{3,}");
    if (this.userName.match(re) != null){
      this.invalidName = true;
      this.nameClicked = true;
    } else {
    this.invalidName = false;
    }
  }

  contactValidation() {
    var re = new RegExp("^[0-9]{10,10}");
    if (this.userContact.match(re) != null){
      this.invalidContact = true;
      this.contactClicked = true;
    } else {
    this.invalidContact = false;
    }
  }

  emailValidation(evt: any) {
    var re = new RegExp("^[a-zA-Z0-9._-]{3,}@[a-z]{1,}[.]{1,1}[a-z]{2,}$");
    if (this.userEmail.match(re) != null){
        this.invalidEmail = true;
        this.emailClicked = true;
    } else {
      this.invalidEmail = false;
    }
  }

  passwordValidation() {
    var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (this.userPassword.match(re) != null){
      this.invalidPassword = true;
      this.passwordClicked = true;
    } else {
      this.invalidPassword = false;
    }
  }

  



//  exform = new FormGroup({
//     name : new FormControl('', Validators.required),
//     email : new FormControl('', [Validators.required, Validators.email]),
//     phone : new FormControl(
//       '',
//       [
//         Validators.required,
//         Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
//       ]),
//     message : new FormControl( [Validators.required, Validators.minLength(10)])
//   });

//   get email123(){
//     return this.exform.get('email');
//   }

  constructor(public projectservice: ProjectService, public matSnackBar: MatSnackBar) { }

  registerUser() {
    let obj = {
      username: this.userName,
      usercontact: this.userContact,
      useremail: this.userEmail
    }
    this.userDetails = localStorage.getItem("registerdUser") == null ? [] : localStorage.getItem("registerdUser");
    //this.userDetails = this.userDetails != [] ? JSON.parse(this.userDetails) : [];
    if(this.userDetails.length > 0){
      this.userDetails = JSON.parse(this.userDetails);
    }
    this.userDetails.push(obj);
    console.log("Atal", this.userDetails)
    // this.userDetails = [...this.userDetails];
    // console.log("Atal1", this.userDetails)
    localStorage.setItem('registerdUser', JSON.stringify(this.userDetails));
    // let x= this.userDetails;
    // console.log("Atal2", x[0].username);
    this.displayMessage("User registered successfully", "");
  }

  newReg(){
    this.displayMessage("User registered successfully", "");
  }

  displayMessage(message: string, action: string){
    this.matSnackBar.open(message, action, {
      duration: 3000,
      panelClass: 'my-custom-snackbar'
    })
  }

  ngOnInit() {
    
  }

}
