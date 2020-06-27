import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "../../services/blog.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-view-blog",
  templateUrl: "./view-blog.component.html",
  styleUrls: ["./view-blog.component.css"],
})
export class ViewBlogComponent implements OnInit {
  public blogId: string = "";
  public title: string = "";
  public description: string = "";
  public image_url: string = "";
  blogLoaded = false;
  constructor(
    private route: ActivatedRoute,
    private bs: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.blogId = this.route.snapshot.params["id"];
    this.bs.getBlog(this.blogId).then((res) => {
      this.title = res.data.title;
      this.description = res.data.description;
      this.image_url = res.data.image_url;
      this.blogLoaded = true;
    });
  }

  deleteBlog(id) {
    this.bs
      .deleteBlog(id)
      .then((res) => this.router.navigate(["main"]))
      .catch((err) => alert(err.response.data));
  }
}
