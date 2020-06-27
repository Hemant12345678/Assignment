import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public username: string = "";
  public password: string = "";

  constructor(private as: AuthService, private router: Router) {}

  ngOnInit(): void {}
  login() {
    let user = {
      username: this.username,
      password: this.password,
    };
    this.as
      .login(user)
      .then((res) => {
        localStorage.setItem("auth-token", res.data);
        this.router.navigate(["main"]);
      })
      .catch((err) => alert(err.response.data));
  }
}
