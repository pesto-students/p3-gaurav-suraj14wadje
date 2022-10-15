const prisma = require("../prisma/prisma");

const assetController = require("express").Router();

assetController.get("/", async (req, res) => {
  const { user } = req;
  const result = await prisma.asset.findMany({
    where: {
      userId: user.id,
    },
  });

  res.json(result);
});

assetController.post("/", async (req, res) => {
  const { name, type, annualGrowthRate, value, unit } = req.body;
  const { user } = req;

  //todo add validations

  const asset = await prisma.asset.create({
    data: {
      name,
      type,
      annualGrowthRate,
      value,
      unit,
      userId: user.id,
    },
  });

  res.json(asset);
});

assetController.put("/", async (req, res) => {
  const { name, type, annualGrowthRate, value, unit, id } = req.body;
  const { user } = req;

  //todo add validations

  const asset = await prisma.asset.update({
    data: {
      name,
      type,
      annualGrowthRate,
      value,
      unit,
      userId: user.id,
    },
    where: {
      id,
    },
  });

  res.json(asset);
});

assetController.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const asset = await prisma.asset.findUnique({ where: { id } });
  if (asset.userId !== req.user.id) return res.send("Forbidden").status(403);

  await prisma.asset.delete({ where: { id } });
  return res.statusCode(200);
});

module.exports = assetController;
