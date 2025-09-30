import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, Category } from '../../../generated/prisma';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryParam = searchParams.get("category");

    let categoryFilter: Category | undefined;
    if (categoryParam) {
      if (Object.values(Category).includes(categoryParam as Category)) {
        categoryFilter = categoryParam as Category;
      }
    }

    const products = await prisma.product.findMany({
      where: categoryFilter ? { category: categoryFilter } : {},
      include: { ratings: true },
      orderBy: { id: "desc" },
    });

  return NextResponse.json(products);
} 
catch (error) {
  console.error(error);
  return NextResponse.json({ error: "Internal server error" }, { status: 500 });
}}