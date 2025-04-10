import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();


const filtering = async () => {


    const andFiltering = await prisma.post.findMany({
        where: {
            AND: [
                {
                    title: {
                        contains: "next.js"
                    },

                },
                {
                    published: true
                }
            ]
        }
    })

    // console.log({andFiltering});


    const orFiltering = await prisma.post.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: "next.js"
                    },
                }, {
                    published: true

                }
            ]
        }
    })

    // console.log({orFiltering});

    const notFiltering = await prisma.post.findMany({
        where: {
            NOT: [
                {
                    title: {
                        contains: "next.js"
                    },
                }, {
                    published: true

                }
            ]
        }
    })

    // console.log({ notFiltering });

    const startWith = await prisma.user.findMany({
        where: {
            email: {
                startsWith: "user2",
                // endsWith: ".com"
                // equals:"user2@gmail.com"
                // contains: " "
            }
        }
    })
    // console.log({ startWith });


    const inDepthData = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            Post: {
                include: {
                    postCategory: {
                        include: {
                            category: true
                        }
                    }
                }
            }
        }
    })

    console.dir(inDepthData, { depth: Infinity });


};

filtering();