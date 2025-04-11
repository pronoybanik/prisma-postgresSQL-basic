import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const aggregates = async () => {

    // find average age
    const avgAge = await prisma.user.aggregate({
        _avg: {
            age: true
        }
    })


    // find sum of age
    const sumAge = await prisma.user.aggregate({
        _sum: {
            age: true
        }
    });

    const minAge = await prisma.user.aggregate({
        _min: {
            age: true
        }
    });

    const maxAge = await prisma.user.aggregate({
        _max: {
            age: true
        }
    });

    console.log(minAge, maxAge);

};

aggregates()