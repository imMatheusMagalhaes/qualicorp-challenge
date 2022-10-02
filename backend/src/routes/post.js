const express = require("express");
const multer = require("multer");
const {
  createPost,
  getAllPost,
  updatePost,
  deletePost,
} = require("../services/post");
const postRouter = express.Router();

postRouter.post("/create", async (req, res) => {
  const { code, data } = await createPost(req.body);
  return res.status(code).send(data);
});

postRouter.get("/get-all", async (_, res) => {
  const { code, data } = await getAllPost();
  return res.status(code).send(data);
});

postRouter.put("/update/:id",  async (req, res) => {
  const { mk } = req.body;
  const { id } = req.params;
  const { code, data } = await updatePost({ mk, id});
  return res.status(code).send(data);
});

postRouter.delete("/delete/:id", async (req, res) => {
  const { code, data } = await deletePost(req.params);
  return res.status(code).send(data);
});

module.exports = postRouter;
