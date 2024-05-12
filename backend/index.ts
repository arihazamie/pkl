import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import bcrypt, { compare, hash } from "bcrypt";
import { Prisma } from "@prisma/client";

dotenv.config();

const app = express();
const port = process.env.PORT;
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//USER
app.post("/api/data/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        data: null,
        message: "Missing required fields: name, email, password",
        status: 400,
      });
    }

    // Hash password securely using bcrypt
    const saltRounds = 10; // Adjust salt rounds for desired security level
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user with hashed password
    const user = await prisma.owner.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(200).json({
      data: user,
      message: "Successfully created user",
      status: 200,
    });
  } catch (error) {
    console.error(error); // Log error for debugging purposes
    res.status(500).json({
      data: null,
      message: `${error}`,
      status: 500,
    });
  }
});
app.post("/api/data/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input data
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await prisma.owner.findUnique({
      where: { id: email },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login successful", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//POST
app.post("/api/data/income", async (req, res) => {
  try {
    const { amount, category, date } = req.body;

    const index = await prisma.income.count();
    const id = index + 1;

    const income = await prisma.income.create({
      data: {
        id: `${id}`,
        amount,
        category,
        date: new Date(date),
      },
    });
    res.status(200).json({
      data: income,
      message: "Successfully created income",
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: `${error}`,
    });
  }
});
app.post("/api/data/expenditure", async (req, res) => {
  try {
    const { amount, category, date } = req.body;

    const index = await prisma.expenditure.count();
    const id = index + 1;

    const expenditure = await prisma.expenditure.create({
      data: {
        id: `${id}`,
        amount,
        category,
        date: new Date(date),
      },
    });
    res.status(200).json({
      data: expenditure,
      message: "Successfully created income",
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: `${error}`,
    });
  }
});

//GET
app.get("/api/data/income", async (req, res) => {
  try {
    const income = await prisma.income.findMany();

    if (income.length > 0) {
      res.status(200).json({
        data: income,
        message: "Successfully fetched income",
      });
    } else {
      throw new Error("No income found");
    }
  } catch (error) {
    res.status(500).json({
      message: `${error}`,
    });
  }
});
app.get("/api/data/expenditure", async (req, res) => {
  try {
    const expenditure = await prisma.expenditure.findMany();
    if (expenditure) {
      res.json({
        data: expenditure,
        message: "Successfully fetched expenditure",
        status: 200,
      });
    } else {
      throw new Error("No expenditure found");
    }
  } catch (error) {
    res.status(500).json({
      message: `${error}`,
    });
  }
});

export default app;
