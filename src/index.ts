// import { PrismaClient } from "@prisma/client";

import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();


const main = async () => {

    // crate data
    // const result = await prisma.post.create({
    //     data: {
    //         title: "This is title 2",
    //         content: "This is content 2",
    //         author: "pronoy banik"
    //     }
    // });

    // get all data
    const getAllPost = await prisma.post.findMany()
    console.log(getAllPost);
}

main()

