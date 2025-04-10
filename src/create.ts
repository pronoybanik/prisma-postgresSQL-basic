import { PrismaClient, UserRole } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {

    // create user
    // const createUser = await prisma.user.create({
    //     data: {
    //         username: "user2",
    //         email: "user2@gmail.com",
    //         role: UserRole.user
    //     }
    // })
    // console.log(createUser);


    // create profile
    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "this is boi 1",
    //         userId: 5
    //     }
    // })
    // console.log(createProfile);

    // // create category
    // const createCategory = await prisma.category.create({
    //     data: {
    //         name: "Backend"
    //     }
    // })
    // console.log(createCategory);

    //create post
    const createPost = await prisma.post.create({
        data: {
            title: "next.js",
            content: "next.js all data",
            authorId: 1,
            postCategory: {
                create: {
                    categoryId: 5
                    // category: {
                    //     connect: {
                    //         id:1
                    //     }
                    // }
                }
            }
        },
        include: {
            postCategory: true
        }
    })

    console.log(createPost);




}

main()

