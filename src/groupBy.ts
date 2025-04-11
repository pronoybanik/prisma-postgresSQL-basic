import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();


const groupBy = async () => {

    const groupBy = await prisma.post.groupBy({
        by: ['published'],
        _count: {
            title: true
        },
        having: {
            authorId: {
                _sum: {
                    gt: 1
                }
            }
        }
    })

    console.log(groupBy);
    
}

groupBy();
