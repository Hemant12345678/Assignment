import { Component, OnInit } from "@angular/core";
import { BlogService } from "../../services/blog.service";

@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.css"],
})
export class BlogsComponent implements OnInit {
  blogs = [];
  constructor(private bs: BlogService) {}

  ngOnInit(): void {
    this.bs.getBlogs().then((res) => {
      this.blogs = res.data;
    });
  }
}
