import { prisma } from "./prisma";

export const generateRandomUsername = async (): Promise<string> => {
  const adjectives = ["Cool", "Fast", "Smart", "Dark", "Bright"];
  const animals = ["Tiger", "Falcon", "Horse", "Dragon", "Panda", "Wolf", "Rabbit", "Cat"];

  let username: string = "";
  let isExists: boolean = true;

  while (isExists) {
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    username = `${randomAdj}${randomAnimal}${randomNumber}`;

    const existingUser = await prisma.profile.findFirst({
      where: {
        username: username,
      },
    });
    if (!existingUser) {
      isExists = false;
    }
  }

  return username;
};
