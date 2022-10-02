module.exports = {
  create:
    "CREATE (post:Post {author: $author, createdAt: $createdAt, updatedAt: $updatedAt, mk: $mk, title: $title}) RETURN post",
  get_all: "MATCH (post:Post) RETURN post",
  update:
    "MATCH (post:Post) WHERE id(post)=$id SET post.updatedAt=$updatedAt, post.mk=$mk RETURN post",
  delete: "MATCH (post:Post) WHERE id(post)=$id DETACH DELETE post",
};
