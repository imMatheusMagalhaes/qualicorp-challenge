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

postRouter.put("/update", multer().single("mk"), async (req, res) => {
  const { id, fileUuid } = req.query;
  const mk = req.file;
  const { code, data } = await updatePost({ mk, id, fileUuid });
  return res.status(code).send(data);
});

postRouter.delete("/delete", async (req, res) => {
  const { code, data } = await deletePost(req.query);
  return res.status(code).send(data);
});

module.exports = postRouter;
