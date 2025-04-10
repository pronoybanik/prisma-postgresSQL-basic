// import { PrismaClient } from "@prisma/client";

import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();


const updates = async () => {


    const updateData = await prisma.post.update({
        where: {
            id: 21
        },
        data: {
            title: "This is title - update",
            content: "content",

        }
    })
    console.log(updateData);

}

updates();

