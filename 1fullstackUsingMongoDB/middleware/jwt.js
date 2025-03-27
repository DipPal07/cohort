import jsonWebToken from "jsonwebtoken";
const generateToken = (data) => {
  const option = { expiresIn: "1h" };
  const token = jsonWebToken.sign(data, process.env.JWT_SECRET, option);
  return token;
};
const verifyToken = (req, res) => {};

export { generateToken, verifyToken };
