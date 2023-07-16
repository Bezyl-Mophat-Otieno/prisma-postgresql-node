import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  try {
    // Your code logic goes here
               //CREATE USER 
    // const user = await prisma.user.create({data:{name:'Mophat'}})
    // console.log(user)
    // LIST ALL USERS 
    // const allUsers = await prisma.user.findMany();
    // console.log(allUsers);
    //DELETE USERS 
    await prisma.user.deleteMany();

  } catch (error) {
    // Handle errors
  } finally {
    await prisma.$disconnect();
  }
};

main();
