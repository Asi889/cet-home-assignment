"use client";
import React from "react";
import { useDataContext } from "../context/DataProvider";
import AddNewTicket from "./AddNewTicket";
import TicketsContainer from "./TicketsContainer";

function AppWrapper() {
  return (
    <main className="px-10 py-20">
      <AddNewTicket />
      <TicketsContainer />
    </main>
  );
}

export default AppWrapper;
