// "use client";
// import { getAllTickets } from "./actions/ticketActions";
import AppWrapper from "@/src/components/AppWrapper";
import { DataProvider, useDataContext } from "../src/context/DataProvider";
import { useState } from "react";
const page = async () => {
  const ticketResponse = await fetch("http://localhost:3000/api/tickets").then(
    (res) => res.json()
  );
  const tasks = await fetch("http://localhost:3000/api/tasks").then((res) =>
    res.json()
  );
  console.log("ticketData");
  console.log(ticketResponse);

  return (
    <DataProvider ticketsApi={ticketResponse} tasksApi={tasks}>
      <AppWrapper />
    </DataProvider>
  );
};

export default page;
