import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlogsComponent } from "./views/blogs/blogs.component";
import { AddBlogComponent } from "./views/add-blog/add-blog.component";
import { EditBlogComponent } from "./views/edit-blog/edit-blog.component";
import { ViewBlogComponent } from "./views/view-blog/view-blog.component";
import { RegisterComponent } from "./views/register/register.component";
import { LoginComponent } from "./views/login/login.component";
import { MainComponent } from "./layout/main/main.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "main",
    component: MainComponent,
    children: [
      { path: "", redirectTo: "blogs", pathMatch: "full" },
      { path: "blogs", component: BlogsComponent },
      { path: "addBlog", component: AddBlogComponent },
      { path: "editBlog/:id", component: EditBlogComponent },
      { path: "viewBlog/:id", component: ViewBlogComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
