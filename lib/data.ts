import { prisma } from "./prisma";

export const getContact = async (query: string, currentPage: number) => {
  try {
    const contacts = await prisma.contact.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return contacts;
  } catch (err) {
    throw new Error("Failed to get contacts");
  }
};

export const getContactById = async (id: string) => {
  try {
    const contact = await prisma.contact.findUnique({ where: { id } });
    return contact;
  } catch (err) {
    throw new Error("Failed to get contacts");
  }
};
