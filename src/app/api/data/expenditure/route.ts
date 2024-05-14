import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const data = await prisma.expenditure.findMany();

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
  const id = `${(await prisma.expenditure.count()) + 1}`;

  try {
    const income = await prisma.expenditure.create({
      data: { id, amount, category, date: new Date(date) },
    });
    return NextResponse.json(
      {
        message: `Expenditure record created successfully with ID: ${income.id}`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}
