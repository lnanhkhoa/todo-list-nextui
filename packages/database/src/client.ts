import { PrismaClient } from "@prisma/client";

declare const global: any; // Add this line to explicitly define the type of the global object

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export * from "@prisma/client";
