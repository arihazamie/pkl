import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const data = await prisma.income.findMany();

    if (data.length) {
      return new Response(JSON.stringify(data), {
        status: 200,
      });
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    return Response.json({ message: `${error}` }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { amount, category, date } = await request.json();
  const id = `${(await prisma.income.count()) + 1}`;

  try {
    const income = await prisma.income.create({
      data: { id, amount, category, date: new Date(date) },
    });
    return NextResponse.json(
      {
        message: `Income record created successfully with ID: ${income.id}`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}
