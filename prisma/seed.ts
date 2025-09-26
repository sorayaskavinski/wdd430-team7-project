// prisma/seed.ts
const { PrismaClient, Category, Role } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
  
  const seller1 = await prisma.user.create({
    data: {
      firstName: "Alice",
      lastName: "Smith",
      email: "alice@example.com",
      passwordHash: "hashedpassword1",
      roles: [Role.SELLER],
      bio: "Seller of home goods",
      avatar: "https://example.com/avatar1.png",
      addresses: "123 Main St, City, Country",
    },
  });

  const seller2 = await prisma.user.create({
    data: {
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob@example.com",
      passwordHash: "hashedpassword2",
      roles: [Role.SELLER],
      bio: "Seller of accessories",
      avatar: "https://example.com/avatar2.png",
      addresses: "456 Market St, City, Country",
    },
  });

  const buyer = await prisma.user.create({
    data: {
      firstName: "Charlie",
      lastName: "Brown",
      email: "charlie@example.com",
      passwordHash: "hashedpassword3",
      roles: [Role.BUYER],
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
