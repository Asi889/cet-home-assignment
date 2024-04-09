import { createTicket, getAllTickets } from "./../../actions/ticketActions";
import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: any, res: NextApiResponse) {
  const body = await req.json();
  await createTicket(JSON.stringify(body));
  return new Response(JSON.stringify(req.body), { status: 200 });
}

export async function GET() {
  const allTickets = await getAllTickets();
  return new Response(JSON.stringify(allTickets), { status: 200 });
}
