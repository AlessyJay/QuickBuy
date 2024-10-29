import {
  createSession,
  generateSessionToken,
} from "../services/sessionProvider";

import { hash } from "bcryptjs";
import { prisma } from "../prisma";

export const register = async (req: any, res: any) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        password: await hash(password, 12),
        firstName,
        lastName,
      },
    });

    return res
      .status(200)
      .json(newUser)
      .send({ message: "Created user successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
