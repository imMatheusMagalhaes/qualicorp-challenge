const { createWriteStream } = require("fs");
const dbDriver = require("../config/db");
const db = dbDriver.session();
const { v4: uuid } = require("uuid");
const { join } = require("path");
const postQuerys = require("../utils/postQuerys");

const createPost = async (params) => {
  const { author, title, mk } = params;
  if (!author || !mk || !title)
    return _handleResponse(400, "Parâmetros inválidos");
  const now = Date.now();
  try {
    const result = await db.run(postQuerys["create"], {
      title,
      author,
      mk: mk,
      createAt: now,
      updateAt: now,
    });
    const node = result.records[0].get(0);
    return _handleResponse(200, node);
  } catch (error) {
    return _handleResponse(500, error);
  }
};

const _createFile = (file, id) => {
  const postUuid = id || uuid();
  createWriteStream(join(__dirname, "..", "..", `/posts/${postUuid}.md`)).write(
    file
  );
  return postUuid;
};

const getAllPost = async () => {
  try {
    const result = await db.run(postQuerys["get_all"]);
    const records = result.records.map((record) => record.get(0));
    return _handleResponse(200, records);
  } catch (error) {
    return _handleResponse(500, error);
  }
};

const updatePost = async (params) => {
  const {
    id,
    mk: { buffer },
    fileUuid,
  } = params;
  if (!buffer || !id || !fileUuid)
    return _handleResponse(400, "Parâmetros inválidos");
  const updateAt = Date.now();
  try {
    _createFile(buffer, fileUuid);
    const result = await db.run(postQuerys["update"], {
      id: Number(id),
      updateAt,
    });
    const node = result.records[0].get(0);
    return _handleResponse(200, node);
  } catch (error) {
    return _handleResponse(500, error);
  }
};

const deletePost = async (params) => {
  const { id } = params;
  if (!id) return _handleResponse(400, "Parâmetros inválidos");
  try {
    const { records } = await db.run(postQuerys["delete"], { id: Number(id) });
    return _handleResponse(200, records);
  } catch (error) {
    return _handleResponse(500, error);
  }
};

const _handleResponse = (code, data) => {
  return { code, data };
};

module.exports = { createPost, getAllPost, updatePost, deletePost };
