const prisma = require("../prisma/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtSecrete } = require("../config");

const authController = require("express").Router();

authController.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  //todo validation
  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
  res.send(result);
});

authController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findFirst({ where: { email } });
  if (!user) return res.send("Invalid email or password").status(401);

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.send("Invalid email or password").status(401);

  const token = jwt.sign({ email: user.email, id: user.id }, jwtSecrete);
  res.send(token);
});

module.exports = authController;
