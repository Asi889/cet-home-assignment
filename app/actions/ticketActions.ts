"use server";
import { revalidatePath } from "next/cache";
import { prismadb } from "@/lib/db";
import { Ticket } from "@prisma/client";

export const createTicket = async (data: any) => {
  const ticket = JSON.parse(data);

  return await prismadb.ticket.create({
    data: ticket,
    include: { tasks: true },
  });
};

export const getAllTickets = async () => {
  return await prismadb.ticket.findMany();
};

export const getAllTasks = async () => {
  return await prismadb.task.findMany();
};
