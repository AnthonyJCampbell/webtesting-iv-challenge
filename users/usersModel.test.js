const db = require("../data/dbConfig.js");
const Users = require("./usersModel");

describe("usersModel", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  afterEach(async () => {
    await db("users").truncate();
  });
  describe("insert", () => {
    it("inserts user into db", async () => {
      const user = {
        username: "John",
        password: "123"
      };
      const newUser = await Users.insert(user);
      expect(newUser).toEqual({ username: "John", user_id: newUser.user_id });
    });
  });
});