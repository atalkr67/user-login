import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existing',
  templateUrl: './existing.component.html',
  styleUrls: ['./existing.component.scss']
})
export class ExistingComponent implements OnInit {

  existingUsers: any = localStorage.getItem("registerdUser") == null ? [] : localStorage.getItem("registerdUser");;
  //existingUsers = this.existingUser[0];
  //existingUsers = JSON.parse(this.existingUser);

  constructor() { }

  ngOnInit() {

    if(this.existingUsers.length > 0){
      this.existingUsers = JSON.parse(this.existingUsers);
    }
  }

}
