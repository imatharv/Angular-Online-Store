import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/userService/user-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
  hide = true;
  constructor( private service: UserServiceService, private router: Router ) { }

  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email, Validators.pattern("^[A-Za-z0-9]+([._+-][A-Za-z0-9]+)*@[A-Za-z0-9]+.[A-Za-z]{2,4}([.][A-Za-z]{2})*$")]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)])
  })

  signin() {
    if(this.form.valid) {
      let data = {
        "email": this.form.controls.email.value,
        "password": this.form.controls.password.value,
      }
      this.service.login(data).subscribe((data: any) => {
        console.log(data);
        sessionStorage.setItem("fullName", data["fullname"]);
        sessionStorage.setItem("email", data["email"]);
        sessionStorage.setItem("token", data.result.accessToken);
        this.router.navigate(["/home"]);
      });
    }
  }

  ngOnInit(): void {
  }

}
