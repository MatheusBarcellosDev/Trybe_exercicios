const connection = require("./connection");

const create = async (user) => {
  const query =
    "INSERT INTO model_example.user (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";

  const [newUser] = await connection.execute(query, [
    user.firstName,
    user.lastName,
    user.email,
    user.password,
  ]);

  return newUser.insertId;
};

const findAll = async () => {
    const query = "SELECT * FROM model_example.user";

    return await connection.execute(query);
}

const findById = async (id) => {
    const query = "SELECT * FROM model_example.user WHERE user_id = ?";

    const user = await connection.execute(query, [id]);

    if (user.length === 0) return null;

    return user[0];
}
module.exports = {
  create,
  findAll,
  findById,
};
