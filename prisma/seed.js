// prisma/seed.ts
const { PrismaClient, Category } = require("../src/generated/prisma");

const prisma = new PrismaClient();

async function main() {
  const seller1 = await prisma.user.upsert({
    where: { email: "alice@example.com" },
    update: {},
    create: {
      firstName: "Alice",
      lastName: "Smith",
      email: "alice@example.com",
      passwordHash: "hashedpassword1",
      roles: ["SELLER"],
      bio: "Sell everything you can imagine",
      avatar: "https://example.com/avatar1.png",
      addresses: "123 Main St, City, Country",
    },
  });

  const seller2 = await prisma.user.upsert({
    where: {email: "bob@example.com" },
    update: {},
    create: {
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob@example.com",
      passwordHash: "hashedpassword2",
      roles: ["SELLER"],
      bio: "Seller of accessories",
      avatar: "https://example.com/avatar2.png",
      addresses: "456 Market St, City, Country",
    },
  });

  const seller3 = await prisma.user.upsert({
    where: { email: "john@gmail.com"},
    update: {},
    create: {
      firstName: "John",
      lastName: "Travolta",
      email: "john@gmail.com",
      passwordHash: "password123",
      roles: ["SELLER"],
      bio: "Seller of home goods",
      avatar: "https://example.com/avatar3.png",
      addresses: "123 Left St, City, Country",
    },
  });

  const buyer = await prisma.user.upsert({
    where: { email: "charlie@example.com" },
    update: {},
    create: {
      firstName: "Charlie",
      lastName: "Brown",
      email: "charlie@example.com",
      passwordHash: "hashedpassword3",
      roles: ["BUYER"],
      bio: "Just a buyer trying products",
      avatar: "https://example.com/avatar3.png",
      addresses: "789 Broadway St, City, Country",
    },
  });

  const product1 = await prisma.product.create({
    data: {
      name: "Stylish Purse",
      description: "A very stylish purse for everyday use.",
      pictureURL: "https://example.com/purse.png",
      price: 79.99,
      quantity: 10,
      category: Category.BAGS_PURSES,
      sellerId: seller2.id,
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: "Cozy Lamp",
      description: "A beautiful lamp to light your home.",
      pictureURL: "https://example.com/lamp.png",
      price: 49.99,
      quantity: 5,
      category: Category.HOME_LIVING,
      sellerId: seller1.id,
    },
  });

  const product3 = await prisma.product.create({
    data: {
      name: "Necklace",
      description: "A beautiful handmade necklace.",
      pictureURL: "https://julializie.bwimg.com.br/julializie/produtos/0323331500-1695121925.9009.jpg",      price: 79.99,
      quantity: 3,
      category: Category.JEWELRY_ACCESSORIES,
      sellerId: seller2.id,
    },
  });

  const product4 = await prisma.product.create({
    data: {
      name: "Black Earings",
      description: "Elegant black earrings for any occasion.",
      pictureURL: "https://dcdn-us.mitiendanube.com/stores/001/403/801/products/produtos-fotos1-797d0210cb57aa36ce16206742036893-1024-1024.webp",
      price: 39.99,
      quantity: 3,
      category: Category.JEWELRY_ACCESSORIES,
      sellerId: seller2.id,
    },
  });

  console.log("Seed Uploaded Successfully!");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
