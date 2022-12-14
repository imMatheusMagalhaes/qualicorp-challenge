const dbDriver = require("../config/db");
const db = dbDriver.session();
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
      createdAt: now,
      updatedAt: now,
    });
    const node = result.records[0].get(0);
    return _handleResponse(200, node);
  } catch (error) {
    return _handleResponse(500, error);
  }
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
  const { mk, id } = params;
  if (!id || !mk) return _handleResponse(400, "Parâmetros inválidos");
  const updatedAt = Date.now();
  try {
    const result = await db.run(postQuerys["update"], {
      id: Number(id),
      updatedAt,
      mk,
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
