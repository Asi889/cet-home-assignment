export interface Task {
  id: string;
  title: string;
  description: string;
  owner: string;
  status: string;
  ticket: Ticket | null; // Allow for potential null values
  ticketId: string;
}

export type Ticket = {
  id: string;
  title: string;
  description: string;
  owner: string;
  dueDate: string; // Use Date for consistency with Prisma Client's DateTime type
  status: string;
  priority: string;
  tasks: Task[] | [];
};

export const IssueTypes = {
  Task: "task",
  Bug: "bug",
} as const;
