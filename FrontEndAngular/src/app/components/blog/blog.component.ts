import { Component, OnInit, Input } from "@angular/core";
import { BlogService } from "../../services/blog.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
  constructor(private bs: BlogService) {}

  @Input() blog;

  ngOnInit(): void {}
}
