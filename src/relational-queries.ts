// import { PrismaClient } from "@prisma/client";

import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const relationalQueries = async () => {

    // // fluent api
    const result = await prisma.user.findUnique({
        where: {
            id: 1
        }
    }).profile();

    console.log(result);
    


    // // relational fillters
    const publishedPostUsers = await prisma.user.findMany({
        include: {
            Post: {
                where: {
                    published: true
                }
            }
        }
    })
    console.dir(publishedPostUsers, { depth: Infinity })

};

relationalQueries();
