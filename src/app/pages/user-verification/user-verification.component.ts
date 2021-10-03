import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/userService/user-service.service';

@Component({
  selector: 'app-user-verification',
  templateUrl: './user-verification.component.html',
  styleUrls: ['./user-verification.component.scss']
})
export class UserVerificationComponent implements OnInit {

  constructor( private service: UserServiceService, private router: Router ) { }

  userVerificationForm = new FormGroup({
    token: new FormControl("", [Validators.required, Validators.minLength(5)]),
  })

  verify() {
    if(this.userVerificationForm.valid) {
      let token =  this.userVerificationForm.controls.token.value

      this.service.verify(token).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(["/account"]);
      });
    }
  }

  ngOnInit(): void {
  }

}
