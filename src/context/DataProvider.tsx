"use client";
import { Ticket } from "@/types/types";
import { Task } from "@prisma/client";
import {
  createContext,
  useEffect,
  useContext,
  useState,
  PropsWithChildren,
} from "react";
export const DataContext = createContext<{
  tasks: Task[];
  tickets: Ticket[];
  setTasks: (tasks: Task[]) => void;
  setTickets: (ticket: Ticket[]) => void;
  addTask: (task: Task) => void;
  addTicket: (ticket: Ticket) => void;
}>({
  tasks: [],
  tickets: [],
  setTasks: () => {},
  setTickets: (ticket: Ticket[]) => {},
  addTask: (task: Task) => {},
  addTicket: (ticket: Ticket) => {},
});

type Props = {
  tasksApi: Task[];
  ticketsApi: Ticket[];
};
export const DataProvider = ({
  children,
  tasksApi,
  ticketsApi,
}: PropsWithChildren<Props>) => {
  const [tasks, setTasks] = useState(tasksApi);
  const [tickets, setTickets] = useState(ticketsApi);

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };
  const addTicket = (newTicket: Ticket) => {
    setTickets([...tickets, newTicket]);
  };

  return (
    <DataContext.Provider
      value={{ tasks, tickets, setTasks, setTickets, addTask, addTicket }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useDataContext = () => useContext(DataContext);
