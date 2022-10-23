const { CashFlowType } = require("@prisma/client");
const prisma = require("../prisma/prisma");

const cashFlowController = require("express").Router();

cashFlowController.get("/", async (req, res) => {
  const user = req;
  let { year, month } = req.query;

  const where = {};
  if (year) where.year = Number(year);
  else year = new Date().getFullYear();
  if (month) where.month = Number(month);

  const result = await prisma.cashFlow.findMany({
    where: {
      userId: user.id,
      ...where,
    },
  });

  res.json(result);
});

cashFlowController.get("/details", async (req, res) => {
  const { user } = req;
  let { year } = req.query;

  const where = {};
  if (year) where.year = Number(year);

  const result = await prisma.cashFlow.groupBy({
    by: ["year", "type"],
    _sum: { amount: true },
    where: {
      userId: user.id,
      type: { in: [CashFlowType.Expense, CashFlowType.Income] },
      ...where,
    },
  });

  res.json(result);
});

module.exports = cashFlowController;
