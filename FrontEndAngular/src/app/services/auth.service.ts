import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public isLoggedIn: boolean = false;
  constructor() {}
  //register new user
  register(data) {
    return axios.post(
      `http://localhost:4000/api/user/register`,
      data
    );
  }
  // login user
  login(data) {
    return axios.post(
      `http://localhost:4000/api/user/login`,
      data
    );
  }
}
