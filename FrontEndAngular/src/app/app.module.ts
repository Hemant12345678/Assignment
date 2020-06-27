import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// Views and components import
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogsComponent } from "./views/blogs/blogs.component";
import { BlogComponent } from "./components/blog/blog.component";
import { NavComponent } from "./views/nav/nav.component";
import { AddBlogComponent } from "./views/add-blog/add-blog.component";
import { EditBlogComponent } from "./views/edit-blog/edit-blog.component";
import { ViewBlogComponent } from "./views/view-blog/view-blog.component";

import { RegisterComponent } from "./views/register/register.component";
import { LoginComponent } from "./views/login/login.component";
// import Services
import { BlogService } from "./services/blog.service";
import { AuthService } from "./services/auth.service";
import { MainComponent } from './layout/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogComponent,
    NavComponent,
    AddBlogComponent,
    EditBlogComponent,
    ViewBlogComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AuthService, BlogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
