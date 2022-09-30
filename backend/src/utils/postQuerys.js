module.exports = {
  create:
    "CREATE (post:Post {author: $author, createAt: $createAt, updateAt: $updateAt, mk: $mk, title: $title}) RETURN post",
  get_all: "MATCH (post:Post) RETURN post",
  update:
    "MATCH (post:Post) WHERE id(post)=$id SET post.updateAt=$updateAt RETURN post",
  delete: "MATCH (post:Post) WHERE id(post)=$id DETACH DELETE post",
};
