const express = require("express");
import { prisma } from "./prisma";

const app = express();
app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.post("/register", async (req: any, res: any) => {
  const { email, password, firstName, lastName } = req.body;

  if (!req.body) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    });

    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
