import React from "react";
import { useDataContext } from "../context/DataProvider";

function TicketsContainer() {
  const { tickets } = useDataContext();

  return (
    <div className="w-full mt-16">
      <h1>ticket container</h1>
      <ul>
        {tickets.map((ticket) => (
          <li
            key={ticket.id}
            className="max-w-[300px] border nes-container is-dark"
          >
            <h2>{ticket.title}</h2>
            <p>{ticket.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketsContainer;
