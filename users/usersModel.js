const db = require("../data/dbConfig.js");

module.exports = { insert };

async function insert(user) {
  const [user_id] = await db("users").insert(user);
  return await db("users")
    .first()
    .select("username", "user_id")
    .where({ user_id });
}

async function destroy(user_id) {
  return db("users")
    .where({ user_id })
    .del();
}