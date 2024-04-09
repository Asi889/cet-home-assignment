import type { NextApiRequest, NextApiResponse } from "next";
import { getAllTasks } from "./../../actions/ticketActions";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const allTickets = await getAllTasks();
  return new Response(JSON.stringify(allTickets), { status: 200 });
}
