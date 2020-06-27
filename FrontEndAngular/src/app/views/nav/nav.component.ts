import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  public isLoggedIn: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    let token = localStorage.getItem("auth-token");
    if (token) {
      this.isLoggedIn = true;
    }
  }
  logout() {
    localStorage.removeItem("auth-token");
    this.router.navigate([""]);
  }
}
