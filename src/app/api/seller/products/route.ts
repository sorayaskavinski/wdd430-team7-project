import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// GET /api/seller/products - Get products for a specific seller
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sellerId = searchParams.get("sellerId");

    if (!sellerId) {
      return NextResponse.json({ error: "Seller ID is required" }, { status: 400 });
    }

    const products = await prisma.product.findMany({
      where: {
        sellerId: parseInt(sellerId),
      },
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching seller products:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST /api/seller/products - Create a new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, pictureURL, description, price, quantity, category, sellerId } = body;

    // Validate required fields
    if (!name || !pictureURL || !description || !price || !quantity || !category || !sellerId) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Validate price and quantity are positive numbers
    if (price <= 0 || quantity < 0) {
      return NextResponse.json({ error: "Price must be positive and quantity must be non-negative" }, { status: 400 });
    }

    const product = await prisma.product.create({
      data: {
        name,
        pictureURL,
        description,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        category,
        sellerId: parseInt(sellerId),
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}