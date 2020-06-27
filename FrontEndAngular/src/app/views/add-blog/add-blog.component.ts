import { Component, OnInit } from "@angular/core";
import { BlogService } from "../../services/blog.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-blog",
  templateUrl: "./add-blog.component.html",
  styleUrls: ["./add-blog.component.css"],
})
export class AddBlogComponent implements OnInit {
  public title: string = "";
  public description: string = "";
  public image_url: string = "";
  constructor(private bs: BlogService, private router: Router) {}

  ngOnInit(): void {}
  addBlog() {
    let blog = {
      title: this.title,
      description: this.description,
      image_url: this.image_url,
    };
    this.bs
      .createBlog(blog)
      .then((res) => this.router.navigate(["main"]))
      .catch((err) => alert(err.response.data));
  }
}
