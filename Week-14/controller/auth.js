const prisma = require("../prisma/prisma");
const bcrypt = require("bcrypt");

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

  const isValid = await bcrypt.compare(user.password, password);
  if (!isValid) return res.send("Invalid email or password").status(401);
});

module.exports = auth;
