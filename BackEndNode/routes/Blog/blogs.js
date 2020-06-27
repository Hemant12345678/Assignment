const router = require("express").Router();
const jwt = require("jsonwebtoken");
// --------------------------------------------------------------------------
const Blog = require("../../models/Blog");
// Defining auth middleware to check authentication and authorization
function AuthMiddleware(req, res, next) {
  // Check if Token exists in header
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(token, "Token-Secret");
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("You are not authorized Person");
  }
}
//---------------------------------------------------------------------------------
// ----------------------------Getting All Blogs----------------------------------------------
router.get("/", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});
// ----------------------------Creating New Blog----------------------------------------------
router.post("/", AuthMiddleware, async (req, res) => {
  const { title, description, image_url } = req.body;
  // Checking for required fields
  if (!title) return res.status(400).send("Title is required!!!");
  if (!description) return res.status(400).send("Description is required!!!");
  if (!image_url) return res.status(400).send("Image_url is required!!!");
  const blog = new Blog({
    title,
    description,
    creator: req.user,
    image_url,
  });
  const savedBlog = await blog.save();
  res.json(savedBlog);
});
// ----------------------------Getting Specific Blog----------------------------------------------
router.get("/:id", async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id });
  res.json(blog);
});
// ----------------------------Updating Blog----------------------------------------------
router.patch("/:id", AuthMiddleware, async (req, res) => {
  // console.log(req.params.id);
  const savedBlog = await Blog.findOne({ _id: req.params.id });
  if (savedBlog.creator !== req.user)
    return res
      .status(400)
      .send("You are not creator of this blog. Access Denied");

  const blog = await Blog.updateOne({ _id: req.params.id }, req.body);
  res.json(blog);
});
// ----------------------------Updating Blog----------------------------------------------
router.delete("/:id", AuthMiddleware, async (req, res) => {
  const savedBlog = await Blog.findOne({ _id: req.params.id });
  if (savedBlog.creator !== req.user)
    return res
      .status(400)
      .send("You are not creator of this blog. Access Denied");
  const blog = await Blog.deleteOne({ _id: req.params.id });
  res.json(blog);
});

module.exports = router;
