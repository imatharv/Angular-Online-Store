import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/userService/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  hide = true;
  constructor( private service: UserServiceService, private router: Router ) { }

  signupForm = new FormGroup({
    fullName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern("^[7-9]{1}[0-9]{9}$")])
  })

  signup() {
    console.log("RRR")
    console.log(this.signupForm.valid)
    if(this.signupForm.valid) {
      let data = {
        "fullName": this.signupForm.controls.fullName.value,
        "email": this.signupForm.controls.email.value,
        "password": this.signupForm.controls.password.value,
        "phone": this.signupForm.controls.phoneNumber.value
      }
      this.service.register(data).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(["/account/verification"]);
      });
    }
  }

  ngOnInit(): void {
  }

}
