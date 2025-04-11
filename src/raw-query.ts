import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const rawQuery = async () => {
    const post = await prisma.$queryRaw`SELECT * FROM "posts"`
    console.log(post);

    // delete all data in table
    // await prisma.$queryRaw`TRUNCATE TABLE "categories" CASCADE`

};

rawQuery();