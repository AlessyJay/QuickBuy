import express from "express";
import { prisma } from "./prisma";
import { hash } from "bcryptjs";

const app = express();
app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.post("/register", async (req: any, res: any) => {
  const { email, password, firstName, lastName } = req.body;
  const pwHash = await hash(password, 12);

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        password: pwHash,
        firstName,
        lastName,
      },
    });

    return res
      .status(200)
      .json(newUser, { message: "User created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
});

app.post("/login", async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const passwordMatch = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
        password: {
          equals: password,
        },
      },
    });

    if (!passwordMatch) {
      return res.status(401).send("Invalid credentials");
    }

    return res.status(200).send("Login successful");
  } catch (error) {
    console.error(error);
  }
});

app.post("/remove", async (req: any, res: any) => {
  const { email } = req.body;

  try {
    const findUser = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (!findUser) {
      return res.status(404).send("User not found");
    }

    await prisma.user.delete({
      where: {
        email: {
          equals: email,
        },
        id: findUser.id,
      },
    });

    return res.status(200).send("User deleted successfully");
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000", { status: 200 });
});
