import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from "../../services/blog.service";

@Component({
  selector: "app-edit-blog",
  templateUrl: "./edit-blog.component.html",
  styleUrls: ["./edit-blog.component.css"],
})
export class EditBlogComponent implements OnInit {
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
  updateBlog() {
    let blog = {
      title: this.title,
      description: this.description,
      image_url: this.image_url,
    };
    this.bs
      .updateBlog(this.blogId, blog)
      .then((res) => this.router.navigate(["main"]))
      .catch((err) => alert(err.response.data));
  }
}
