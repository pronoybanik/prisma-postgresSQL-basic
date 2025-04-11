import { PrismaClient, UserRole } from "../generated/prisma";

const prisma = new PrismaClient();

const batchTransaction = async () => {

    // transaction 2 data in one time if eny show any error data do not insert in data base;
    const createUser = prisma.user.create({
        data: {
            username: "user4",
            email: "user4@ph.com",
            role: UserRole.user
        }
    });

    const updateUser = prisma.user.update({
        where: {
            id: 10
        },
        data: {
            age: 30
        }
    });

    const [userData, updateData] = await prisma.$transaction([
        createUser,
        updateUser
    ]);

    console.log(userData, updateData);
};

batchTransaction();
