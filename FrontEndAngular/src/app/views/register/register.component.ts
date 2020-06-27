import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  public username: string = "";
  public password: string = "";
  public dob: string = "";
  constructor(private as: AuthService, private router: Router) {}

  ngOnInit(): void {}
  register() {
    let user = {
      username: this.username,
      password: this.password,
      dob: this.dob,
    };
    this.as
      .register(user)
      .then((res) => this.router.navigate([""]))
      .catch((err) => alert(err.response.data));
  }
}
