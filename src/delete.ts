import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const deleteData = async () => {
    const singleDelete = await prisma.post.delete({
        where: {
            id: 1
        }
    });
    console.log(singleDelete);
    
}

deleteData()

