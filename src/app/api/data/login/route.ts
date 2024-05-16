import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

interface Owner {
  id: string;
  email: string;
  password: string;
}
const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};
const generateToken = (ownerId: string): string => {
  if (!process.env.SECRET_KEY) {
    throw new Error("SECRET_KEY environment variable is not set");
  }
  return jwt.sign({ ownerId }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
};
const findOwnerByEmail = async (email: string): Promise<Owner | null> => {
  return await prisma.owner.findUnique({
    where: { email },
  });
};
const authenticateOwner = async (
  email: string,
  password: string
): Promise<Owner> => {
  const owner = await findOwnerByEmail(email);
  if (!owner) {
    throw new Error("Invalid email or password");
  }
  const isValidPassword = await verifyPassword(password, owner.password);
  if (!isValidPassword) {
    throw new Error("Invalid email or password");
  }
  return owner;
};
export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { email, password } = body;
    const owner = await authenticateOwner(email, password);
    const token = generateToken(owner.id);
    return NextResponse.json({ token, owner });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
