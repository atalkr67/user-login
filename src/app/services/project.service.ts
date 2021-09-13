import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule  } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(public matSnackBar: MatSnackBar) { }

  action : any;

  displayMessage(message: string){
    this.matSnackBar.open(message, this.action, {
      duration: 3000
    })
  }

  // actionMessage(message: any){
  //   this.matSnackBar.open(message, this.action, {
  //     duration: 3000
  //   })
  // }
}
