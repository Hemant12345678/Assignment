import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  constructor() {}
  // Get All Blogs
  getBlogs() {
    return axios.get("http://localhost:4000/api/blogs");
  }
  // Get single blog
  getBlog(id) {
    return axios.get(`http://localhost:4000/api/blogs/${id}`);
  }
  // create blog
  createBlog(data) {
    let token = localStorage.getItem("auth-token");
    let options = {
      headers: {
        "auth-token": token,
      },
    };
    return axios.post(
      `http://localhost:4000/api/blogs`,
      data,
      options
    );
  }
  // update blog
  updateBlog(id, data) {
    let token = localStorage.getItem("auth-token");
    let options = {
      headers: {
        "auth-token": token,
      },
    };
    return axios.patch(
      `http://localhost:4000/api/blogs/${id}`,
      data,
      options
    );
  }
  // update blog
  deleteBlog(id) {
    let token = localStorage.getItem("auth-token");
    let options = {
      headers: {
        "auth-token": token,
      },
    };
    return axios.delete(
      `http://localhost:4000/api/blogs/${id}`,
      options
    );
  }
}
