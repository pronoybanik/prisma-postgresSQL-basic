import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const paginationSorting = async () => {

    // offset pagination
    const offsetData = await prisma.post.findMany({
        skip: 5,
        take: 2
    })

    // console.log("offset data", offsetData);

    // cursor base pagination
    const cursorData = await prisma.post.findMany({
        skip: 5,
        take: 2,
        cursor: {
            id: 15
        }
    })
    // console.log("cursor data", cursorData);


    // sorting data
    const sortedData = await prisma.post.findMany({
        orderBy: {
            title: "asc"
        }
        
    })

    console.log(sortedData);
    

}

paginationSorting()

