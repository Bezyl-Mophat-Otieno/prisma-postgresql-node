import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// Log the SQL queries exeucted by Prisma Client
// const prisma = new PrismaClient({log:['query']});

const main = async () => {
  //For testing purposes , you will definately not do this .
  // await prisma.user.deleteMany();
  try {

    // const user = await prisma .user.create({
    //   data:{
    //     name:"Bezyl Mophat",
    //     email:"bezylmophatotieno@gmail.com",
    //     age:23,
    //     userPreferences:{
    //       create:{
    //         emailPreferences:true
    //       }
          
    //     },
    //   },select:{
    //     name:true,
    //     userPreferences:{
    //       select:{
    //         emailPreferences:true
    //       }
    //     }
    //   }
      
    // });
    // console.log(user);

    // const users = await prisma.user.createMany({
    //   data:[
    //     {
    //       name:"Bezyl Mophat",
    //       email:" bezylmophatotieno@gmail.com",
    //       age:23,
    //     },
    //     {
    //       name:"Byrone Mophat",
    //       email:" byronemophatotieno@gmail.com",
    //       age:23,
    //     },
    //     {
    //       name:"Breanna Mophat",
    //       email:" breannamophatotieno@gmail.com",
    //       age:23,
    //     }
    //   ]
    // })
    // console.log(users);

    //QUERYING THE DATABASE

    // const user = await prisma.user.findUnique({
    // where:{
    //   email:" bezylmophatotieno@gmail.com",
    // }
    // })

    // console.log(user)

    const users = await prisma.user.findMany({
      where:{
        age:23
      },distinct:["name"],
      orderBy:{
        name:"desc"
      },
      take:3,
      skip:1,
    })

    console.log(users)




  } catch (error) {
    // Handle errors
  } finally {
    await prisma.$disconnect();
  }
};

main();
