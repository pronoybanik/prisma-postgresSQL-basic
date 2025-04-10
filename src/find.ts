import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
    // find all data
    const getAllPost = await prisma.post.findMany()

    const findFirst = await prisma.post.findFirst({
        where: {
            id: 2
        }
    });

    // if you have not data and show error message (then you use findFirstOrThrow)
   
    // const findFirstOrThrow = await prisma.post.findFirstOrThrow({
    //     where: {
    //         id: 6
    //     }
    // });

    const findUnique = await prisma.post.findUnique({
        where: {
            id: 14
        },
        select: {
            title: true,
        }
    });

    console.log({findUnique});
}

main()

